const jwt = require('jsonwebtoken')


const verifyToken = (req,res,next) => {
    const authHeader = req.header.token
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (error,user) => {
            if(error){
                res.status(403).json("Token is invalid")
            } else {
                req.user = user
                next()
            }
        })
    } else {
        return res.status(401).json("You are not authenticated")
    }
}

const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id){
            next()
        } else {
            res.status(403).json("The Authorization Given Does Not Have Access To This Resource")
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization }