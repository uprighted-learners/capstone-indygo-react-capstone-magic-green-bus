//sponsor sign up form schema
const mongoose = require("mongoose");
//Helper function to calculate the date one month from now
const oneMonthFromNow = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date;
};

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
  expireAt: {
    type: Date,
    default: oneMonthFromNow,
    expires: 0,
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
