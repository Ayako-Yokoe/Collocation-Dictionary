const mongoose = require("mongoose")

const WordlistSchema = new mongoose.Schema(
  {
    front: { type: String },
    back: { type: Array },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Wordlist", WordlistSchema)
