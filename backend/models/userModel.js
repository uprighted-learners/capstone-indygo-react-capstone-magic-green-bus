//user schema

const { mongoose } = require("../db.js");

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
});
module.exports = mongoose.model("user", userSchema); //data  has a dresscode

