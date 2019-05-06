const mongoose = require('mongoose')
const Schema = mongoose.Schema


//create schema
const UserSchema = new Schema( {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    permission: {
        type: String,
        require: true,
        default: 'user'
    },
    isActive: {
        type: String,
        require: true,
        default: true
    }
})

module.exports = User = mongoose.model('user', UserSchema)