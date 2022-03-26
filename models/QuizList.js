const mongoose = require('mongoose')


const QuizlistSchema = new mongoose.Schema({
    // wordlist: { type: Array },
    quizlist: { type: String },
    // selected: { type: Boolean, defaul: false}
},
{ timestamps: true }
)

module.exports = mongoose.model('Quizlist', QuizlistSchema)