const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const passport = require('passport')

//Load input validation
const validateRegisterInput = require('../validation/register')


//@route Get /users
//@ desc Test route
//@access Public
router.get('/', (req, res) => {
    console.log(req)
    res.send({
        msg: 'Users works'
    })
})

//@route Get /users/register
//@ desc register a user
//@access Public

router.post('/register', (req, res) => {
    console.log(req)
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