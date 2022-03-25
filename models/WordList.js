const mongoose = require('mongoose')


const WordlistSchema = new mongoose.Schema({
    // wordlist: { type: Array },
    wordlist: { type: String },
    // selected: { type: Boolean, defaul: false}
},
{ timestamps: true }
)

module.exports = mongoose.model('Wordlist', WordlistSchema)