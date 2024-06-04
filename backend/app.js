const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { connect } = require('./db.js');

const app = express();
app.use(express.json())
app.use(cors())
app.use(express.static('    public'));

const authRoutes = require('./routes/authRoutes');
app.use('/users', authRoutes);
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
  });