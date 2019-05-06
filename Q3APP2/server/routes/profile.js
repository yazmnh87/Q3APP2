const express = require('express');
const router = express.Router();
mongoose = require('mongoose')
const passport = require('passport')
const Profile = require('../models/Profile')
const User = require('../models/User')

//@route Get /api/profile/test
//@ desc test
//@access Public
router.get('/test', (req, res) => {
    res.send({msg: "profile works"})
})

//@route Get /api/profile
//@ desc return profile
//@access Private
router.get('/', passport.authenticate('jwt', { session: false}), (req, res) => {
    const errors = {}
    Profile.findOne({user: req.user.id})
    .then(profile => {
        if(!profile){
            errors.noprofile = "There is no profile for this user"
            return res.status(404).send(errors)
        }
        res.send(profile)
    })
    .catch(err => res.status(404).send(err))
})


//@route Get /api/profile
//@ desc create or update profile
//@access Private
router.post('/', passport.authenticate('jwt', { session: false}), (req, res) => {
    //get fields
    const profileFields = {}
    profileFields.user = req.user.id;
    if(req.body.phone)profileFields.phone = req.body.phone
    if(req.body.school)profileFields.school = req.body.school
    if(req.body.careerinterests)profileFields.careerinterests = req.body.careerinterests
    if(req.body.hobbies)profileFields.hobbies = req.body.hobbies
    if(req.body.team)profileFields.team = req.body.team
    if(req.body.mentor)profileFields.mentor = req.body.mentor
    console.log(req.body)
    Profile.findOne({
        user: req.user.id
    })
    .then(profile => {
        if(profile) {
            Profile.findOneAndUpdate(
                {user: req.user.id}, 
                {$set: profilesFields}, 
                { new: true}
                ).then(profile => res.send(profile))
        } else {
            console.log("profile not found")
        }
        new Profile(profileFields)
        .save()
        .then(profile => res.send(profile))
    })
})

module.exports = router