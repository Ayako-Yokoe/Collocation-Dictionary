const router = require('express').Router()
const { verifyTokenAndAuthorization } = require('./verifyToken')
const User = require('../models/User')
const CryptoJS = require('crypto-js')


// Update
router.put('/:id', verifyTokenAndAuthorization, async (req,res) => {
    if(req.body.password){
        req.body.passsword = CryptoJS.AES.encrypt(
            req.body.passsword,
            process.env.PASS_SECRET
        ).toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedUser)
    } catch(err) {
        res.status(500).json(err)
    }
})

// Delete 
router.delete('/:id', verifyTokenAndAuthorization, async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router
