
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sponsor.css';
import Footer from './Footer';


export default function SponsorRegister() {
  const location = useLocation();// Retrieve selected location from previous page (map)
  const selectedLocation = location.state.location; // Get selected location from state from map.js

  const [name, setName] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [userId, setUserId] = useState("");
  const [datesOfSponsoring, setDatesOfSponsoring] = useState([]);
  const [isGuest, setIsGuest] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datesOfSponsoring);
    try {
      const response = await fetch(
        "http://localhost:8080/sponsor/create", //go check registerSponsor in backend/routes/sponsorRoutes to make sure names match.js
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            userId,
            location: locationInput,
            datesOfSponsoring,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        setName("");
        setLocationInput("");
        setDatesOfSponsoring([]);
        setUserId("");
        alert("User created successfully!");
      } else {
        alert("Failed to create user");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const changeDateArray = (e) => {
    setDatesOfSponsoring((prevDatesOfSponsoring) => [e.target.value]);
  };
  //use effect hook to allow the set location autfill to work along with be able to change the location if needed 
  useEffect(() => {
    if (selectedLocation) {
      setLocationInput(selectedLocation.id);
    }
  }, [selectedLocation]);

  return (
    <div>
      <h2>Register New Sponsor</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>User Id</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <label>Location:</label>
        <input
          type="location"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          required
        />
        <label>Dates of Sponsorship:</label>
        <input
          type="datesOfSponsoring"
          value={datesOfSponsoring}
          onChange={(e) => changeDateArray(e)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <div className="sponsor-pic">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrsXtoBS6GbuRmp_-W0FftkzFOl9FkJrJWQ&s"
          alt="IndyGo Logo"
        />
      </div>
    </div>
  );
}
