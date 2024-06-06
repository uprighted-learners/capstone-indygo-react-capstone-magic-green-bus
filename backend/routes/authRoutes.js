//login and register routes 
const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/authControllers.js')

 router.post('/login', userControllers.loginUser)

router.post('/register', userControllers.registerNewUser)

router.put('/update', userControllers.updateUser)

router.delete('/delete', userControllers.deleteUser)
module.exports = router;
