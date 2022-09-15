const User = require('../models/User')
const {StatusCodes} = require('http-status-codes');
const {BadRequestError, UnauthenticatedError} = require('../errors'); 
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
// require('dotenv').config();

const register = async(req, res) => {
    // check if input is empty
    // const {name, email, password} = req.body; 
    // if(!name || !email || !password){
    //     throw new BadRequestError('Please provide name, email and password')
    // }

    // cryptage du password dans le controller que l'on passe au model pour plus de clareté dans l'utilisation du document 
    // const {name, email, password} = req.body;
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt ) 
    // const tempUpser = {name, email, password:hashedPassword}
    //const user = await User.create({...tempUpser})

    const user = await User.create({...req.body})
    // methode A pour renvoyer les infos que l'on souhaite dans local storage
    const token = jwt.sign({userId :user._id, name:user.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
    // ou avec la méthode b 
    //const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({user:{name: user.name},token})
    // method B avec le middleware de mongoose pour renvoyer les infos en utilisant la méthode getname()
    //res.status(StatusCodes.CREATED).json({user:{name: user.getName()},token})
}

const login = async (req, res) => {
    const{email, password} = req.body;
    
     if(!email || !password){
        throw new BadRequestError('Please provide name, email and password')
    }

    const user = await User.findOne({email})

    // si aucun user tourvé en bdd on renvoit l'erreur
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    // compare password
    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({user:{name:user.name}, token})
}

module.exports = {
    register, 
    login
}