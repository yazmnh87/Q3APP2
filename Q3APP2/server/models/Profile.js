const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
     phone: {
        type: Number,
        required: true

     },  
    school: {
        name: String,
        location: String
    },
    careerinterests: {
        type: [String]
    },
    hobbies: {
        type: [String]
    },
    team: {
        type: String
    },
    mentor: {
        type: String
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)