//use mongoose to connect to mongo db\
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

async function connect() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connect, mongoose };
