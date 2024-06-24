import React, { useState } from 'react';
import './Sponsor.css';

export default function SponsorRegister() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [datesOfSponsoring, setDatesOfSponsoring] = useState('');
  const [isGuest, setIsGuest] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/users/register`, //go check registerSponsor in backend/routes/sponsorRoutes to make sure names match.js
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            userId,
            location,
            datesOfSponsoring,
            isGuest,
          }),
        },
      );
      if (response.ok) {
        setName('');
        setEmail('');
        setLocation('');
        setDatesOfSponsoring('');
        setUserId('');
        localStorage.getItem('token') ? setIsGuest(false) : setIsGuest(true);
        alert('User created successfully!');
      } else {
        alert('Failed to create user');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    
    <div className='sponsor-form-container'>
 
      <h2 className='New-Sponsor'>Register New Sponsor</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br></br>
        <label>User Id</label>
        <input
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <br></br>
        <label>Location:</label>
        <input
          type='location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <br></br>
        <label>Dates of Sponsorship:</label>
        <input
          type='datesOfSponsoring'
          value={datesOfSponsoring}
          onChange={(e) => setDatesOfSponsoring(e.target.value)}
          required
        />
        <br></br>
   { localStorage.getItem("token") ? <button onChange={console.log("hi")}> Click Me! </button> : <p>You must be logged in to view this button</p> }
      </form><br></br>
      <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrsXtoBS6GbuRmp_-W0FftkzFOl9FkJrJWQ&s'
          alt='IndyGo Logo'
        />
      <div className='sponsor-pic'>
        <h1>SPONSOR A STOP!</h1>
      <p c> take the the take the time to sponsor a bus stop near you NOW!!!. With the value of your information that allow us to collect data, and build infastructure, we can provide fast bus stops all over indeanapolis. With your input we can return accurate bus stops accordingto your coordinats</p>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrsXtoBS6GbuRmp_-W0FftkzFOl9FkJrJWQ&s'
          alt='IndyGo Logo'
        />
      </div>
    </div>
  );
}

