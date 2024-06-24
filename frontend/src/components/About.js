import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='Contact-Container-Row'>
      <h1 className='Row-Header'>About Us</h1>
      <p>Hello, we are indygo, one of the largest transportation buissnesses in indeanapolis. A common goal among indygo is that of bettering the community, seemlessly this website is centered around,  allowing a user to pick a bus stop and keep track of whos gonna clean it(sponsoring). This website is highly immersive if youre looking to get involved and feeling extra zestful, please think about setting up a time to sponsor a bus stop.  </p>
      <div className='about-pic'>
        <img
          style={{ width: '50%' }}
          src='https://st2.depositphotos.com/3765139/6173/i/950/depositphotos_61730885-stock-photo-old-bus-retro-style2.jpg'
          alt='IndyGo Bus'
        />
      </div>
    </div>
  );
}

