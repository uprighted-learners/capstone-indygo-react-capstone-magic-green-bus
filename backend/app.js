//spin up server that connects to each route and mongo db
const express = require('express'); // Importing the express module
const cors = require('cors'); // Importing the cors module
require('dotenv').config(); // Importing the dotenv module
const app = express(); // Importing the express module

//middleware setup
app.use(express.json()); // Importing the express module
app.use(cors()); // Uncomment this line if you want to use CORS middleware
app.use(express.static('public')); //this public folder is where we will store our images

// Importing PORT from the .env file
const PORT = process.env.PORT || 8080;

// this is a test to make sure the server is running correctly
app.get('/green/bus', (req, res) => {
  res.send('Hello from the green bus route');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

