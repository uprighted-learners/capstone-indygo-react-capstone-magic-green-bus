const express = require('express');
const router = express.Router();
const stopsControllers = require('../controllers/stopsControllers'); // Import the Stop model

// Route to upload and process map data
router.post('/upload', stopsControllers.uploadMapData);

// Route to fetch all stops
router.get('/all', stopsControllers.getStops);

module.exports = router;