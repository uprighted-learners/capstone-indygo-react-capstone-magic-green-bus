import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Sponsor.css";








export default function SponsorRegister() {
  const location = useLocation(); // Retrieve selected location from previous page (map)
  const selectedLocation = location.state?.location; // Get selected location from state from map.js
  const [name, setName] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const [datesOfSponsoring, setDatesOfSponsoring] = useState([]);
  const [UserId,setUserId] = useState('')
  const isLoggedIn = localStorage.getItem("token") ? true : false;

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
            location: locationInput,
            datesOfSponsoring,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        setName("");
        setLocationInput("");
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        console.log(decoded);
        console.log(token);

        setDatesOfSponsoring([]);

        setUserId('');
        alert('User created successfully!');
      } else if (response.status === 409) {
        alert('Location already sponsored!');
      } else {
        alert('Failed to sponsor, please check information')

      }
    } catch (error) {
      alert(error.message);
    }
  };
  const changeDateArray = (e) => {
    setDatesOfSponsoring((prevDatesOfSponsoring) => [e.target.value]);
  };

  return (

    
    <div className='sponsor-form-container'>
      <label className='sponsor-form-container2'>Sponsor a stop
\
 
      <h2 className='New-Sponsor'>Register New Sponsor</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label className='nameLabel-Sponsor'>Name:</label>
        <input className='NameInput-sponsor'
          list="name-options"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br></br>

        <label className='nameLabel-Sponsor'>Location:</label>
        {/* <input


  
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <br></br>
        <label>Location:</label>
        <input


          type="location"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          required
        /> */}
        <br></br>
        <label className='sponsordates-Header'>Dates of Sponsorship:</label>
        <input
        className='input-sponsor'
          type="datesOfSponsoring"
          value={datesOfSponsoring}
          onChange={(e) => changeDateArray(e)}
          required
        />


        <br></br>
   { localStorage.getItem("token") ? <button className='ternary-button'onChange={console.log("hi")}> Click Me! </button> : <p>You must be logged in to view this button</p> }
   </form></label>
      <form><br></br>
      <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrsXtoBS6GbuRmp_-W0FftkzFOl9FkJrJWQ&s'
          alt='IndyGo Logo'
        />

        <button type='submit'>Register</button>

      </form>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        voluptatem.
      </p>


      <div className='sponsor-pic'>
        <h1>SPONSOR A STOP!</h1>
      <p c> take the the take the time to sponsor a bus stop near you NOW!!!. With the value of your information that allow us to collect data, and build infastructure, we can provide fast bus stops all over indeanapolis. With your input we can return accurate bus stops accordingto your coordinats</p>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrsXtoBS6GbuRmp_-W0FftkzFOl9FkJrJWQ&s"
          alt="IndyGo Logo"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed at
        volutpat leo, at fermentum neque. Aliquam erat volutpat. Fusce auctor
        felis varius felis, et cursus dui velit non nulla.
      </p>
      <div className="aboutPic">
        <img
          style={{ width: "30%" }}
          src="https://st2.depositphotos.com/3765139/6173/i/950/depositphotos_61730885-stock-photo-old-bus-retro-style2.jpg"
          alt="IndyGo Bus"
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed at
        sit amet malesuada turpis. Nullam non urna id justo egestas gravida vel
        ut felis. Suspendisse ultrices, risus id facilisis ullamcorper, libero
        felis varius felis, et cursus dui velit non nulla.
      </div>
      <img
        style={{ width: "30%" }}
        src="https://st2.depositphotos.com/3765139/6173/i/950/depositphotos_61730885-stock-photo-old-bus-retro-style2.jpg"
        alt="IndyGo Bus"
      />
      <div className="randomParagraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          risus id facilisis ullamcorper, libero felis varius felis, et cursus
          dui velit non nulla.
        </p>
      </div>
      <div className="contact-pic">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MItdHg7Dft465SwXLUCH5IkW6bwP53V4LduwJQhMDI_-jDbmKhihTQqtIcicppNOoyo&usqp=CAU"
          alt="IndyGo Bus"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
  )
};
