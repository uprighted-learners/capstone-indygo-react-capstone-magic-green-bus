import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


export default function NavBar() {
  return (
    <nav className='navWrapper'>
      <img className='Logo-indyGO' src='https://www.elements.org/media/3673/indygo_logo_indygo-logo-blue.png?mode=max&width=600&height=220&upscale=false'></img>
      <ul className='navList'>
        
        <li className='navItem'>
          <Link to='/'>HOME</Link>
        </li>
        <li className='navItem2'>
          <Link to='/map'>MAP</Link>
        </li>
        <li className='navItem3'>
          <Link to='/Auth'>LOGIN</Link>
        </li>
        <li className='navItem4'>
          <Link to='/contact'>CONTACT US</Link>
        </li>
        <li className='navItem5'>
          <Link to='/sponsor'>SPONSOR</Link>
        </li>
      </ul>
    </nav>
  );
}

