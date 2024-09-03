const path = require('path');
const xlsx = require('xlsx');
const Stop = require('../models/stopsModel'); 

// file path for the Excel file
const filePath = path.join(__dirname, '..', 'mapDataFile', 'Stops_2406_WithData.xls');

// Endpoint to upload and process map data
exports.uploadMapData = async (req, res) => {
    try {
        // Read the Excel file
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        // Convert sheet to JSON data
        const jsonData = xlsx.utils.sheet_to_json(sheet);

        // Process each row and save to MongoDB using Mongoose
        const stopsData = ['stop_id', 'stop_name', 'stop_lat', 'Shelter', 'Seating', 'BikeRack'];

        for (let i = 0; i < jsonData.length; i++) {
            const data = jsonData[i];

            const newStop = new Stop({
                stop_id: data.stop_id,
                stop_name: data.stop_name,
                stop_lat: parseFloat(data.stop_lat), // Convert string to Number
                stop_lon: parseFloat(data.stop_lon), // Convert string to Number
                DIR: data.DIR,
                PLC: data.PLC,
                TYP: data.TYP,
                ADAScore: parseInt(data.ADAScore), // Convert string to Number
                Sidewalk: parseInt(data.Sidewalk), // Convert string to Number
                Shelter: parseInt(data.Shelter), // Convert string to Number
                Seating: parseInt(data.Seating), // Convert string to Number
                BikeRack: parseInt(data.BikeRack), // Convert string to Number
                ObjectID_1: parseInt(data.ObjectID_1), // Convert string to Number
                PassOn23: parseInt(data.PassOn23), // Convert string to Number
                AvgOn23: parseInt(data.AvgOn23), // Convert string to Number
                PassOff23: parseInt(data.PassOff23), // Convert string to Number
                AvgOff23: parseInt(data.AvgOff23), // Convert string to Number
                Days: parseInt(data.Days), // Convert string to Number
                AvgRdr23: parseInt(data.AvgRdr23) // Convert string to Number
            });
            

            // Save the Stop document to MongoDB
            const savedStop = await newStop.save();
            stopsData.push(savedStop); // Optionally collect saved data for response
        }

        // Respond with JSON data or success message
        res.json({ message: 'Map data uploaded successfully', data: stopsData });
    } catch (error) {
        console.error('Error processing the file:', error);
        res.status(500).json({ error: 'Failed to process the file' });
    }
};

// Endpoint to fetch stops data from MongoDB
exports.getStops = async (req, res) => {
    try {
        // Fetch all stops from MongoDB
        const stops = await Stop.find();
        res.json(stops);
    } catch (error) {
        console.error('Error fetching stops:', error);
        res.status(500).json({ error: 'Failed to fetch stops' });
    }
};
