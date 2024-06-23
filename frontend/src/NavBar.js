import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className='navWrapper'>
      <ul className='navList'>
        <li className='navItem'>
          <Link to='/'>ABOUT</Link>
        </li>
        {/* <li>
          <Link to='/home'>HOME</Link>
        </li> */}
        <li>
          <Link to='/map'>MAP</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT US</Link>
        </li>
        <li>
          <Link to='/sponsor'>SPONSOR</Link>
        </li>
        <li>
          <Link to='/Auth'>LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}

