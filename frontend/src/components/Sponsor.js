import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Sponsor.css";

export default function SponsorRegister() {
  const [name, setName] = useState("");
  const location = useLocation(); // Retrieve selected location from previous page (map)
  const [locationInput, setLocationInput] = useState("");
  const selectedLocation = location.state?.location; // Get selected location from state from map.js

  //use effect hook to allow the set location autfill to work along with be able to change the location if needed
  useEffect(() => {
    if (selectedLocation) {
      setLocationInput(selectedLocation.id);
    }
  }, [selectedLocation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            location: locationInput,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        setName("");
        setLocationInput("");
        alert("Sponsor created successfully!");
      } else if (response.status === 409) {
        alert("Location already sponsored!");
      } else {
        alert("Failed to sponsor, please check information");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="sponsor-form-container">
        <h2>Register New Sponsor</h2> {/* Handled by Ryan */}
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="labels">
            <label className="nameLabel-Sponsor">Name:</label>
            <input
              className="NameInput-sponsor"
              list="name-options"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br></br>
            <label className="locationLabel-Sponsor">Location:</label>
            <input
              className="locationInput-sponsor"
              type="location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="Register-buttons">
            {localStorage.getItem("token") ? (
              <button className="LoggedIn-Button"> REGISTER</button>
            ) : (
              <p className="Guest-Message">You must be logged in to register.</p>
            )}
          </div>
        </form>
        <br></br>
        <div className="Sponsor-Time">
          <p>
            Sponsorship responsibilities will be held for 1 month, feel free to
            responsor after that.
          </p>
        </div>
        <br></br>
        <p className="lorem-text">
        Are you passionate about making a positive impact in your community? Our Bus Stop Sponsorship program allows you to take action by sponsoring a local bus stop for 30 days. Simply choose a bus stop in your area within Vermont, and take responsibility for its upkeep. Whether it's picking up litter, adding a fresh coat of paint, or simply keeping the area tidy, your efforts will help create a cleaner, more welcoming environment for everyone who uses the stop. This is your chance to be a visible force for good in your community while making a real difference in the places we all depend on.
        </p>
        <br></br>
        <p className="lorem-text">
        At the end of the 30-day sponsorship period, you can choose to either refresh your sponsorship or select a new bus stop to care for. Keep in mind that each individual can only sponsor one bus stop at a time, ensuring that as many people as possible can participate in this initiative. The goal of this program is to foster community pride, improve the appearance of public spaces, and bring neighbors together. By sponsoring a bus stop, you're not just helping to clean up an area—you're actively contributing to a better, more connected Vermont.
        </p>
        <br></br>
      </div>
    </>
  );
}
