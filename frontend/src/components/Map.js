import React, { useState, useEffect } from 'react';
import L from 'leaflet'; // Import Leaflet library

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from 'react-router-dom';


// Custom icon configuration
const customIcon = new L.Icon({
  iconUrl:
    'https://www.iconpacks.net/icons/2/free-location-map-icon-2956-thumb.png', // icon image link
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor point of the icon, usually half of the icon size
});

export default function App() {
  // State to store the locations fetched from the API
  const [locations, setLocations] = useState([]);
  // State to track sponsored locations 
  const [sponsoredLocations, setSponsoredLocations] = useState([]);
  // State to store the selected location for sponsorship
  const [selectedLocation, setSelectedLocation] = useState(null);
  // useNavigate hook for navigation, needed for autofilling the location input
  const navigate = useNavigate();

  // Function to fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {

        // Fetch data from the GIS API
        const response = await fetch('https://xmaps.indy.gov/arcgis/rest/services/OpenData/OpenData_Transportation/MapServer/4/query?where=1%3D1&outFields=*&outSR=4326&f=json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        const data = await response.json();
        // Map the fetched features to the format needed for locations state

        const locationsData = data.features.map(feature => ({
          id: feature.attributes.IDENTIFIER,
          description: feature.attributes.DESCRIPTION,
          latitude: feature.attributes.LATITUDE,
          longitude: feature.attributes.LONGITUDE
        }));
        setLocations(locationsData);

        // Fetch sponsored locations from your backend API
        const sponsorResponse = await fetch('http://localhost:8080/sponsor/all');
        if (!sponsorResponse.ok) {
          throw new Error('Failed to fetch sponsor locations');
        }
        const sponsorData = await sponsorResponse.json();
        // Extracting location IDs from sponsorData
        const extractedLocations = sponsorData.map(sponsor => sponsor.location);
        setSponsoredLocations(extractedLocations);
        console.log(extractedLocations); //*****this will be removed once I can further test the sponsor forms

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Function to check if a location is sponsored
  const isSponsored = (locationId) => {
    return sponsoredLocations.includes(locationId);
  };

  // Handle sponsor button click
  const handleSponsorClick = (location) => {
    setSelectedLocation(location.id);
    // Navigate to the sponsor form route with the selected location data
    navigate('/sponsor', { state: { location } });
  };

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
        <Marker key={location.id} position={[location.latitude, location.longitude]} icon={customIcon}>
          {/* Popup component to display the location description */}
          <Popup>{location.description}, {location.id},
            {/* Conditionally render the button based on sponsorship status */}
            {!isSponsored(location.id) && (
              <button onClick={() => handleSponsorClick(location)}>Sponsor Me!</button>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>

  );
}

