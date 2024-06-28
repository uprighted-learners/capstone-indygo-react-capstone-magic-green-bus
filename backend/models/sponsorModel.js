//sponsor sign up form schema
const mongoose = require("mongoose");

// User Schema
const sponsorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
  datesOfSponsoring: {
    type: Array,
    required: true,
  },
  expiresAt: {
    type: Date,
    default: Date.now,
    index: { expires: "30d" },
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  isGuest: {
    type: Boolean,
    default: true,
  },
});

// Create a model for a User
module.exports = mongoose.model("sponsor", sponsorSchema);
