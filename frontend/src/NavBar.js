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
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/Auth'>LOGIN</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT US</Link>
        </li>
        <li>
          <Link to='/locations'>LOCATIONS</Link>
        </li>
        <li>
          <Link to='/sponsor'>SPONSOR</Link>
        </li>
        <li>
          <Link to='/map'>MAP</Link>
        </li>
      </ul>
    </nav>
  );
}

