const mongoose = require("mongoose");

// Define the Stop Schema
const stopSchema = new mongoose.Schema({
    stop_id: {
        type: String,
        required: true,
    },
    stop_code: {
        type: String,
        
    },
    stop_name: {
        type: String,
        required: true,
    },
    stop_desc: {
        type: String,
        
    },
    zone_id: {
        type: String,
       
    },
    stop_url: {
        type: Number,
       
    },
    stop_lat: {
        type: Number,
        required: true,
    },
    stop_lon: {
        type: Number,
        required: true,
    },
});

// Create a model for a Stop
const Stop = mongoose.model("Stop", stopSchema);

module.exports = Stop;
