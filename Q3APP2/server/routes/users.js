const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const Response = require('../models/Response')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const passport = require('passport')

//Load input validation
const validateRegisterInput = require('../validation/register')


//@route Get /users
//@ desc Test route
//@access Public
// router.get('/', (req, res) => {
//     console.log(req)
//     res.send({
//         msg: 'Users works'
//     })
// })

//@route Get /users/register
//@ desc register a user
//@access Public

router.post('/register', (req, res) => {
    console.log(req.body)
    // const {errors, isValid} = validateRegisterInput(req.body)
    // if(!isValid){
    //     return res.status(400).json(errors)
    // }



    User.findOne({ email: req.body.email})
    .then(user => {
        if (user) {
            return res.status(400).send({
                email: "E-mail Already Exists"
            })
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                avatar: avatar,
                password: req.body.password
            })
            console.log(newUser)
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash
                    newUser.save()
                    .then(user => res.send(user))
                    .catch(err => console.log(err))
                })
            })
        }
    })
})

//@route Get /users/login
//@ desc login w/ token
//@access Public

router.post('/login', (req, res) => {
    console.log(req.body)
    const email = req.body.email
    const password = req.body.password 

    //find by email
    User.findOne({email})
    .then( user => {
        if (!user){
            return res.status(404).send({email: "User Not Found"})
        }

        //check PW
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch){
                // res.send({msg: "success"})
                //user Matched
                const payload = { 
                    id: user.id, 
                    firstName: user.firstName,
                    lastName: user.lastName,
                    avatar: user.avatar 
                }
                //sign Token
                jwt.sign(payload, 
                    keys.secretOrKey, 
                    { expiresIn: 3600 },
                    (err, token) => {
                      res.send({
                          success: true,
                          token: 'Bearer ' + token,
                          payload: payload.id
                      })
                    })
            } else {
                return res.status(400).send({password: "Password incorrect"})
            }
        })
    })
})

router.delete('/:id', (req, res) => {
    // console.log(req)
    User.findById(req.params.id)
    .populate('responses')
    .populate('profiles')
    .deleteMany()
    .then(user => res.send(user)
)})

router.get('/allusers', (req, res) => {
    // console.log(req)
    const query = User.find().select("firstName lastName _id permission date email")
    query.exec((err, users) => {
        console.log(users)
        if(err) return res.status(500).send(err)
        return res.status(200).send(users)
    })
})

router.get('/', (req, res) => {
    // console.log(req)
    const query = User.find({permission: "user"}).select("firstName lastName _id")
    query.exec((err, users) => {
        if(err) return res.status(500).send(err)
   
        return res.status(200).send(users)
    })
})
//@route Get /users/current
//@ desc return current user
//@access Private

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.send({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email
    })
})

module.exports = router