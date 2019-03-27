const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    school: {
        name: String
    },
    careerinterests: {
        type: [String]
    },
    hobbies: {
        type: [String]
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)