const jwt = require("jsonwebtoken")

module.exports = (req,res,next)=>{

    try{
    let token = req.headers["authorization"].split(" ")[1]
    let verifyToken = jwt.verify(token,"12345678")
    req.id_user = verifyToken.id_user
    next()}
    catch (error) {
        res.status(403).json(error)
    }
}