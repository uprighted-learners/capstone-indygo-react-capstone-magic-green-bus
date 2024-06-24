import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className='navWrapper'>
      <ul className='navList'>
        <li className='navItem'>
          <Link to='/'>HOME</Link>
        </li>
        <li className='navItem2'>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li className='navItem3'>
          <Link to='/Auth'>LOGIN</Link>
        </li>
        <li className='navItem4'>
          <Link to='/contact'>CONTACT US</Link>
        </li>
        <li className='navItem5'>
          <Link to='/locations'>LOCATIONS</Link>
        </li>
        <li className='navItem6'>
          <Link to='/sponsor'>SPONSOR</Link>
        </li>
        <li className='navItem7'>
          <Link to='/map'>MAP</Link>
        </li>
      </ul>
    </nav>
  );
}

