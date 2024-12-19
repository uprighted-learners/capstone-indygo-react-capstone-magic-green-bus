import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";

// Custom icon configuration
const customIcon = new L.Icon({
  iconUrl:
    "https://www.iconpacks.net/icons/2/free-location-map-icon-2956-thumb.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const sessionStorage = window.sessionStorage;

export default function App() {
  const [locations, setLocations] = useState([]);
  const [sponsoredLocations, setSponsoredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      // Check if locations are cached in sessionStorage
      const cachedLocations = sessionStorage.getItem("cachedLocations");
      if (cachedLocations) {
        const parsedLocations = JSON.parse(cachedLocations);
        setLocations(parsedLocations);
      } else {
        // Fetch fresh locations data
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/stops/all`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Ensure data is properly structured before mapping
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("Data fetched is not in the expected format");
        }

        // Map the fetched features to the format needed for locations state
        const locationsData = data.map((stop) => ({
          id: stop.stop_id,
          description: stop.stop_name,
          latitude: stop.stop_lat,
          longitude: stop.stop_lon,
        }));
        setLocations(locationsData);

        // Update sessionStorage cache
        sessionStorage.setItem(
          "cachedLocations",
          JSON.stringify(locationsData)
        );
      }

      // Fetch sponsored locations if not already fetched
      const cachedSponsoredLocations = sessionStorage.getItem(
        "cachedSponsoredLocations"
      );
      if (cachedSponsoredLocations) {
        const parsedSponsoredLocations = JSON.parse(cachedSponsoredLocations);
        setSponsoredLocations(parsedSponsoredLocations);
      } else {
        // Fetch sponsored locations from your backend API
        const sponsorResponse = await fetch(
          "http://localhost:8080/sponsor/all"
        );
        if (!sponsorResponse.ok) {
          throw new Error("Failed to fetch sponsor locations");
        }
        const sponsorData = await sponsorResponse.json();
        // Extracting location IDs from sponsorData
        const extractedLocations = sponsorData.map(
          (sponsor) => sponsor.location
        );
        setSponsoredLocations(extractedLocations);

        // Update sessionStorage cache
        sessionStorage.setItem(
          "cachedSponsoredLocations",
          JSON.stringify(extractedLocations)
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to check if a location is sponsored
  const isSponsored = (locationId) => {
    return sponsoredLocations.includes(locationId);
  };

  // Handle sponsor button click
  const handleSponsorClick = (location) => {
    setSelectedLocation(location.id);
    // Navigate to the sponsor form route with the selected location data
    navigate("/sponsor", { state: { location } });
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only once when component mounts
  console.log(locations);
  return (
    <>
      <h1 className="Instruction">
        Select a Bus Stop on the Map to Begin Sponsoring!
      </h1>

      {/* MapContainer component to render the map */}
      <MapContainer center={[44.5594, -73.0843]} zoom={13}> {/* Updated center to Essex, VT */}
        {/* TileLayer component to add the base map layer */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Iterate over locations and add markers for each location */}
        
        {locations.map((location) => (
        
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            icon={customIcon}
          >
            {/* Popup component to display the location description */}
            <Popup>
              {location.description},
              {/* Conditionally render the button based on sponsorship status */}
              {!isSponsored(location.id) && (
                <button onClick={() => handleSponsorClick(location)}>
                  Sponsor Me!
                </button>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* Display selected location information */}
      {selectedLocation && <div>Selected Location: {selectedLocation}</div>}
    </>
  );
}
