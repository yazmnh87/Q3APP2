const mongoose = require('mongoose')
const Schema = mongoose.Schema


const QuestionSchema = new Schema ({

    questionnumber : {
        type: Number,
        required: true
    },
    questionsubcategory: {
            type: String,
            required: true
    },
    questioncategory: {
            type: String,
            required: true
    },
    question: {
            type: String,
            required: true
    }
})

module.exports = mongoose.model('questions', QuestionSchema)