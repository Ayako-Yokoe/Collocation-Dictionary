const mongoose = require('mongoose')

const WordlistSchema = new mongoose.Schema({
    wordlist: { type: Array }
},
{ timestamps: true }
)

module.exports = mongoose.model('Wordlist', WordlistSchema)