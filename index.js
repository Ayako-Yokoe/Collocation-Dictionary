const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const wordlistRouter = require('./routes/wordlist')


mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err))


app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/wordlist', wordlistRouter)


app.listen(process.env.PORT || 8000, () => {
    console.log('Backend server is running')
})