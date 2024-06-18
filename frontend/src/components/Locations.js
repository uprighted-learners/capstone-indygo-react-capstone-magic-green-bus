import React from 'react';
import './Locations.css';
import Footer from './Footer';

export default function Locations() {
  return (
    <>
      <div>Locations</div>

      <div className='location-pic'>
        <img
          style={{ width: '50%' }}
          src='https://indyencyclopedia.org/wp-content/uploads/2023/11/indianapolis-railways-bus-drivers-ca-1950s-2-2-cropped.jpg'
          alt='IndyGo building'
        />
      </div>
    </>
  );
}

