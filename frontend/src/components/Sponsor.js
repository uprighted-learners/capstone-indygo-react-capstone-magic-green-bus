import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Sponsor.css';

export default function SponsorRegister() {
  const [name, setName] = useState('');
  const location = useLocation(); // Retrieve selected location from previous page (map)
  const [locationInput, setLocationInput] = useState('');
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
        'http://localhost:8080/sponsor/create', //go check registerSponsor in backend/routes/sponsorRoutes to make sure names match.js
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            location: locationInput,
          }),
        },
      );
      console.log(response);
      if (response.ok) {
        setName('');
        setLocationInput('');
        alert('Sponsor created successfully!');
      } else if (response.status === 409) {
        alert('Location already sponsored!');
      } else {
        alert('Failed to sponsor, please check information');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className='sponsor-form-container'>
        <label className='sponsor-form-container2'>Sponsor a stop</label>

        <h2 className='New-Sponsor'>Register New Sponsor</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <br></br>
          {localStorage.getItem('token') ? (
            <>
              <label className='nameLabel-Sponsor'>Name:</label>
              <input
                className='NameInput-sponsor'
                list='name-options'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br></br>
              <label>Location:</label>
              <input
                type='location'
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                required
              />
              <button onChange={console.log('hi')}> REGISTER</button>
            </>
          ) : (
            <p>You must be logged in to view this button</p>
          )}
        </form>
        <br></br>
        <p>
          Sponsorship responsibilities will be held for 1 month, feel free to
          responsor after that.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam
        </p>
        <h1>SPONSOR A STOP</h1>
        <br></br>
        <p>
          take the the take the time to sponsor a bus stop near you NOW!!!. With
          the value of your information that allow us to collect data, and build
          infastructure, we can provide fast bus stops all over indeanapolis.
          With your input we can return accurate bus stops accordingto your
          coordinats
        </p>
      </div>
    </>
  );
}

