const express = require('express')
const router = express.Router()

const Response = require('../models/Response')
const Question = require('../models/Question')

router.get('/', (req,res) => {
    Question.find((err, questions)=> {
        if(err) return res.status(500).send(err)
        return res.status(200).send(questions)
    })
})

router.post('/', (req,res) => {
    // console.log(req.body)
    const newQuestion = new Question({
        questionnumber: req.body.questionnumber,
        questioncategory: req.body.questioncategory,
        questionsubcategory: req.body.questionsubcategory,
        question: req.body.question
    })
    // console.log(newQuestion)
    newQuestion.save()
    .then(question => res.send(question))
    .catch(err => console.log(err))
})

module.exports = router