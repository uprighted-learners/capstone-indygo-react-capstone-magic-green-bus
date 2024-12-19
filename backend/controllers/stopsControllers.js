const path = require('path');
const xlsx = require('xlsx');
const Stop = require('../models/stopsModel'); 

// file path for the Excel file
const filePath = path.join(__dirname, '..', 'mapDataFile', 'FS_VCGI_OPENDATA_Trans_PUBLICTRANS_point_stops_SP_v1_3583848854917391278.xlsx');

// Endpoint to upload and process map data
exports.uploadMapData = async (req, res) => {
    try {
        // Read the Excel file
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        // Convert sheet to JSON data
        const jsonData = xlsx.utils.sheet_to_json(sheet);

        const stopsData = []; // Array to hold stops data to return

        for (let i = 0; i < jsonData.length; i++) {
            const data = jsonData[i];

            // Validate latitude and longitude (ensure they are valid numbers)
            const lat = parseFloat(data.y); // 'y' contains latitude in the data
            const lon = parseFloat(data.x); // 'x' contains longitude in the data
            

            // If either latitude or longitude is invalid, set them to a default value (e.g., 0)
            if (isNaN(lat) || isNaN(lon)) {
                console.warn(`Invalid latitude or longitude at row ${i + 1}: stop_lat = ${data.stop_lat}, stop_lon = ${data.stop_lon}, full row data:`, data);
                data.stop_lat = 0; // Default latitude
                data.stop_lon = 0; // Default longitude
            }

            // Ensure coordinates are not NaN before saving
            if (lat === 0 || lon === 0) {
                console.warn(`Skipping invalid stop at row ${i + 1}: Invalid coordinates`);
                continue; // Skip this row and move to the next one
            }

            const newStop = new Stop({
                stop_id: data.stop_id,
                stop_code: data.stop_code,
                stop_name: data.stop_name,
                stop_desc: data.stop_desc,
                zone_id: data.zone_id,
                stop_lat: lat, // Use validated or default latitude
                stop_lon: lon, // Use validated or default longitude
            });

            // Save the stop document to MongoDB
            const savedStop = await newStop.save();
            stopsData.push(savedStop); // Optionally collect saved data for response
        }

        // Respond with success message
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
