//login and register functionallity 
const User = require('../models/userModel')//tranfering our User model that will contain the "dress code" for our data
require('dotenv').config()//configures our dotenv file allowing use of our envioirmental variables
const bcrypt = require('bcrypt');//allowing our file to depend on bcrypt to encrypt passwords when sent to the  database 
const jwt = require('jsonwebtoken');//authentication token depending on jsonwebteoken being installed
const SALT = process.env.SALT//uses enviroment variable assuming the salt rounds are set via .env


exports.registerNewUser = async (req, res) => {//declares a async function that will be called when the user is registered, being executed by our req, res big arrow function
  try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = new User({
          username: req.body.username,
          password: hashedPassword,
      });

      // Validate input data
      if (!req.body.username || !req.body.password) {
          throw new Error("Please provide username and password.");
      }
      const newUser = await user.save();//saving our new user because user is already in our database/schema
      res.status(201).json(newUser);//201 for successful registration/creation
  } catch (error) {//the catch is important for catching all sorts of erorrs
      console.error("Registration error:", error);//log it to the console just in case
      res.status(500).json({ message: "internal server error" });//error of 500 means theirs an internal server erorr
  }
};



exports.loginUser = async (req, res) => {//decalres a function that will hold our try catch block and allow a user to login using async and our req,res 
    try {
      const user = await User.findOne({username: req.body.username});//will allow other code to wait from executing until the user is found 
      console.log(user)
      if (!user) //data validation  if the user is not a user throw an erorr
      throw new Error('invalid credentials')
       
      
     
      const validPassword = await bcrypt.compare(req.body.password, user.password);//comapres the entered password to the users password 
      if (!validPassword) 
      throw new Error('invalid credentials')
      
      const token = jwt.sign({ id: user._id }, SALT);//declaring a token variable to be used elsewhere and assigning the users token to their automatically assinged ID
      res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.deleteUser = async (req, res) => {
  try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
          return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};

  //is admin, or user id matches updating/ deleting a user
  //else is current user = user.find { id: req.params.id }
//should a user be allowed to delete their account
//should a user be allowed to update their account given theirs no name s or profiles dispalyed
//should we implement admin perms for these reasons to see all users and update/delete their accounts
