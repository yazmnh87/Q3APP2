const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResponseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    response: [{
          resval: Number,
          questionId : {
              type: Schema.Types.ObjectId,
              ref: 'questions'
          }

    }],
    date: {
        type: Date,
        default: Date.now
    }
    })

module.exports = mongoose.model('responses', ResponseSchema)