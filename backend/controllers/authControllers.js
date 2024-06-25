//login and register functionallity 
const User = require('../models/userModel')//tranfering our User model that will contain the "dress code" for our data
require('dotenv').config()//configures our dotenv file allowing use of our envioirmental variables
const bcrypt = require('bcrypt');//allowing our file to depend on bcrypt to encrypt passwords when sent to the  database 
const jwt = require('jsonwebtoken');//authentication token depending on jsonwebteoken being installed
const SALT = process.env.SALT//uses enviroment variable assuming the salt rounds are set via .env


exports.registerNewUser = async (req, res) => {//an asyncronous function for try catch and await.
    //our request and response that are needed to send user data to the DB
    try{
        const hashedPassword =  await bcrypt.hash(req.body.password, 10)

        const user = new User({
            username: req.body.username,
            password: hashedPassword,
        } )
console.log(req.body)
const {username,  password} = req.body
if(!username  || !password){
    throw new Error("please provide this info")
}
if(password < 10){
    throw new Error("password must be less than 10 characters")
} //above is data validation so all the fields are valid according to our required data validation with errors and length.

const newUser = await user.save();//saves the user object to database
res.status(201).json(newUser);//sends a status of 201 determining it worked
    }catch(error){
console.log(error)
res.status(404).json({message: "internal server error"})
    }
}


exports.loginUser = async (req, res) => {
    try {
      const user = await User.findOne({username: req.body.username});
      console.log(user)
      if (!user) 
      throw new Error('invalid credentials')
       
      
     
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) 
      throw new Error('invalid credentials')
      
      const token = jwt.sign({ id: user._id }, SALT);
      res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
exports.updateUser = async (req, res)=>{
  try{
    const user = await User.findOneAndUpdate({password: req.body.password, username: req.body.username})
if (!user) {
    res.status(404).json({ message: "User not found" });
  }
//   if(!user.isAdmin){
// res.status(404).json({ message: " Admin privileges are not allowed" });
//   }
    res.status(200).json({ message: "User updated successfully" });
  }catch(error){
    console.log(error)
    res.status(404).json({message: "internal server error"})
  }
  }
  exports.deleteUser = async (req, res) => {
    try {
        // Find the user by id and delete their information
        
      const foundUser = await User.find({id: req.params.id});
    if(!foundUser)throw Error("User does not exist");
      const deletedUser = await User.findOneAndDelete(req.params.id)
          
        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        // If an error occurs during the delete process, send an 500 response
        console.error("Error updating user:", error); // Logging for debug
        res.status(500).json({ message: "Internal server error" });
    }
  }
  //is admin, or user id matches updating/ deleting a user
  //else is current user = user.find { id: req.params.id }
//should a user be allowed to delete their account
//should a user be allowed to update their account given theirs no name s or profiles dispalyed
//should we implement admin perms for these reasons to see all users and update/delete their accounts