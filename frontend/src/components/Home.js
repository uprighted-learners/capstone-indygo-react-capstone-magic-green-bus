import React from 'react';
import './Home.css';

import {Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='hero-section'>
        <img
        className='Hero-Container-Img'
          src='https://images.mid-day.com/images/images/2022/sep/busstop_d.jpg'
          alt='IndyGo Bus'
        />
      </div>
   
     <div className='hero-section-content'>
     <h1>Beterring the community</h1><br></br>
      <p>Every day, we're dedicated to enhancing Indiana's bus stops, one clean-up at a time. Join us — all we need are passionate locals like you!</p>    
      <button type='submit'  className='Home-Button'> <Link to='/sponsor'>Sponsor a stop</Link></button>
</div>  
<div className='flexbox-container'>
<div className='box1'>Travel is essential in the city
  <h1 classNamee='content-header'></h1>
  <img src='/TUZH4506.PNG'></img>
  <p>Every day, we're dedicated to enhancing Indiana's bus stops, one clean-up at a time. Join us — all we need are passionate locals like you!. WE call upon you locals for a simple and rational goal of bettering the community</p>
</div>
</div>

    </>
  );
}

//Home is commented out bc william may not want it, but its not deleted in case he does want it

