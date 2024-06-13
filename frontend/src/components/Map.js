import React, { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  // State to store the locations fetched from the API
  const [locations, setLocations] = useState([]);

  // function to fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://xmaps.indy.gov/arcgis/rest/services/OpenData/OpenData_Transportation/MapServer/4/query?where=1%3D1&outFields=*&outSR=4326&f=json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        const data = await response.json();
        // Map the fetched features to the format needed for locations state
        setLocations(data.features.map(feature => ({
          id: feature.attributes.IDENTIFIER,
          description: feature.attributes.DESCRIPTION,
          latitude: feature.attributes.LATITUDE,
          longitude: feature.attributes.LONGITUDE
        })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); 

  return (
    // MapContainer component from react-leaflet to render the map
    <MapContainer center={[39.768577, -86.158098]} zoom={13}>
      {/* TileLayer component to add the base map layer */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"     
      />
      {/* Iterate over locations and add markers for each location */}
      {locations.map(location => (
        <Marker key={location.id} position={[location.latitude, location.longitude]}>
          {/* Popup component to display the location description */}
          <Popup>{location.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
