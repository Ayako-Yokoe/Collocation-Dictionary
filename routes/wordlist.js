const router = require('express').Router()
const Wordlist = require('../models/WordList')


// Get
router.get('/', async (req,res) => {
    try{
        const wordlist = await Wordlist.find()
        res.status(200).json(wordlist)
    } catch(err) {
        res.status(500).json(err)
    }
})

// Create
router.post('/', async (req,res) => {
    const newWordlist = new Wordlist(req.body)
    
    try {
        const savedWordlist = await newWordlist.save()
        res.status(200).json(savedWordlist)
    } catch(err) {
        res.status(500).json(err)
    }
})

// Delete
router.delete('/:id', async (req,res) => {
    try {
        await Wordlist.findByIdAndDelete(req.params.id)
        res.status(200).json("Word has been deleted")
    } catch(err) {
        res.status(500).json(err)
    }
})

 module.exports = router