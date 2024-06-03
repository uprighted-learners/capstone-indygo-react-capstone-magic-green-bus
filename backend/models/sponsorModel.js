//sponsor sign up form schema
const mongoose = require("mongoose");

// User Schema
const sponsorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  addedUsers: {
    type: Array,
    required: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for a User
module.exports = mongoose.model("sponsor", sponorSchema);
