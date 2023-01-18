const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const wordlistRouter = require("./routes/wordlist")
const path = require("path")

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err))

app.use(cors())
app.use(express.json())
app.use("/api/wordlist", wordlistRouter)

// app.use(express.static(path.join(__dirname, "/client/build")))

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"))
// })

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is running")
})
