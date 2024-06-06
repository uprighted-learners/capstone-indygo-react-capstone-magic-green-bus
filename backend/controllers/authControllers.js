//login and register functionallity 
const User = require('../models/userModel')//tranfering our User model that will contain the "dress code"
require('dotenv').config()//configures our dotend file allowing use of our envioirmental variables
const bcrypt = require('bcrypt');//allowing our file to depend on bcrypt to encrypt passwords when sent to the  database
const jwt = require('jsonwebtoken');//authentication token depending on jsonwebteoken being installed
const SALT = process.env.SALT//uses enviroment variable assuming the salt rounds are set via .env


exports.loginUser = async (req, res) =>{
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user){
            throw new Error("user not found")
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword){
            throw new Error("invalid password")
        }
        const token = jwt.sign({id: user._id}, SALT)
        res.status(200).json({token})
    }catch(error){

    }
}
exports.registerNewUser = async (req, res) => {//an asyncronous function for try catch and await.
    //our request and response that are needed to send user data to the DB
    try{
        const hashedPassword =  await bcrypt.hash(req.body.password, 10)

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
            email: req.body.email,
            timestamp: Date.now(),
            isAdmin: req.body.isAdmin,//a data object that will be passed to the server  when the user is logged 
            //and to store our data and buld infastructures in the database
        })
const {firstName, lastName, email, password} = req.body
if(!firstName || !lastName || !email || !password){
    throw new Error("please provide this info")
}
if(password > 10){
    throw new Error("password must be less than 10 characters")
} //above is data validation so all the fields are valid according to our required data validation with errors and length.

    }catch(error){
console.log(error)
res.status(404).json({message: "internal server error"})
    }
}