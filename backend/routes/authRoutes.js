//login and register routes 
const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/authControllers.js')

 router.post('/login', userControllers.loginUser)

router.post('/register', userControllers.registerNewUser)
module.exports = router;