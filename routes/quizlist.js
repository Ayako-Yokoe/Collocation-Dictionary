const router = require('express').Router()
const { verifyTokenAndAuthorization } = require('./verifyToken')
const Quizlist = require('../models/QuizList')


// Get
// router.get('/find/:userId', verifyTokenAndAuthorization, async (req,res) => {
// router.get('/find/:userId', verifyTokenAndAuthorization, async (req,res) => {
router.get('/', verifyTokenAndAuthorization, async (req,res) => {
    try{
        // const wordlist = await Wordlist.findOne({ userId: req.params.userId })
        const quizlist = await Quizlist.find()
        res.status(200).json(quizlist)
    } catch(err) {
        res.status(500).json(err)
    }
})

// Delete
// router.delete('/:id', verifyTokenAndAuthorization, async (req,res) => {
    router.delete('/:id', verifyTokenAndAuthorization, async (req,res) => {
        try {
            await Quizlist.findByIdAndDelete(req.params.id)
            res.status(200).json("Word has been deleted")
        } catch(err) {
            res.status(500).json(err)
        }
    })
    
     module.exports = router