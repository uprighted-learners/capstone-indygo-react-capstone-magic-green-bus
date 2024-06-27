import React from 'react';
import './Home.css';

import {Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='hero-section'>
        <img
        className='Hero-Container-Img'
          src='https://www.indygo.net/wp-content/uploads/2023/01/Homepage-Slider-Photos.png'
          alt='IndyGo Bus'
        />
      </div>
   
     <div className='hero-section-content'>
     <h1>Beterring the community</h1><br></br>
      <p>Every day, we're dedicated to enhancing Indiana's bus stops, one clean-up at a time. Join us — all we need are passionate locals like you!</p>    
      <button type='submit'  className='Home-Button'> <Link to='/sponsor'>Sponsor a stop</Link></button>
</div>
<div className='flexbox-container'>
<div className='box1'>text</div>
<div className='box2'>text</div>
<div className='box3'>test</div>
</div>

    </>
  );
}

//Home is commented out bc william may not want it, but its not deleted in case he does want it

