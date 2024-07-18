const mongoose = require("mongoose");

// Define the Stop Schema
const stopSchema = new mongoose.Schema({
    stop_id: {
        type: String,
        required: true,
    },
    stop_name: {
        type: String,
        required: true,
    },
    stop_lat: {
        type: Number,
        required: true,
    },
    stop_lon: {
        type: Number,
        required: true,
    },
    DIR: {
        type: String,
        required: true,
    },
    PLC: {
        type: String,
        required: true,
    },
    TYP: {
        type: String,
        required: true,
    },
    ADAScore: {
        type: Number,
        required: true,
    },
    Sidewalk: {
        type: Number,
        required: true,
    },
    Shelter: {
        type: Number,
        required: true,
    },
    Seating: {
        type: Number,
        required: true,
    },
    BikeRack: {
        type: Number,
        required: true,
    },
    ObjectID_1: {
        type: Number,
        required: true,
    },
    PassOn23: {
        type: Number,
        required: true,
    },
    AvgOn23: {
        type: Number,
        required: true,
    },
    PassOff23: {
        type: Number,
        required: true,
    },
    AvgOff23: {
        type: Number,
        required: true,
    },
    Days: {
        type: Number,
        required: true,
    },
    AvgRdr23: {
        type: Number,
        required: true,
    }
});

// Create a model for a Stop
const Stop = mongoose.model("Stop", stopSchema);

module.exports = Stop;
