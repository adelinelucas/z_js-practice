const jwt = require('jsonwebtoken');
// import custom error 
const {BadRequestError} = require('../errors')
require('dotenv').config()

const login = async(req, res) => {
    const {username, password} = req.body;
    console.log(username, password)
    if(!username || !password){
        throw new BadRequestError('Please provide email and password') 
    }

    const id = new Date().getDate();
    // création du token
    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg: 'usercreated', token}) 
}

const dashboard = async (req, res) => {
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({
        msg: `Hello, ${req.user.username} Doe`, 
        secret: `Here is tour authorized data, your lucky number is ${luckyNumber}`})
        
}

module.exports = {
    login, dashboard
}