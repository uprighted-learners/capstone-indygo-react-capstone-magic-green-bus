import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='hero-section'>
        <h1>Bettering the community</h1>
        <br></br>
        <p>
          Every day, we're dedicated to enhancing Indiana's bus stops, one
          clean-up at a time. Join us — all we need are passionate locals like
          you!
        </p>
        <button type='submit' className='Home-Button'>
          <Link to='/sponsor'>Sponsor a stop</Link>
        </button>
      </div>
    </>
  );
}

