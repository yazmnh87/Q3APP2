const express = require('express')
const router = express.Router()
const Response = require('../models/Response')
const Question = require('../models/Question')

router.post('/', (req, res) => {
    console.log(req.body)
    const newResponse = new Response({
        response: [...req.body.responses],
        user: req.body.user

    })
    console.log(newResponse)
    Response.insertMany(newResponse)
    .then(survey => res.send(survey))
    .catch(err => console.log(err))
})

router.get('/:_id', (req,res) => {
    console.log(req.params._id)
    const query = Response.find({user: req.params._id}).populate('response.questionId')
    query.exec((err, data) => {
        // console.log(data)
        if(err) return res.status(500).send(err)
        return res.status(200).send(data)
        
    })
})
    
router.get('/:date', (req, res) => {
    console.log(req)

})


module.exports = router