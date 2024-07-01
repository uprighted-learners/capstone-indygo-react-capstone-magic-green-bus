import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


export default function NavBar() {
  return (
  <nav className='navWrapper'><p className='indyGo'>indyGo</p>

      <ul className='navList'>
        <li className='navItem-Logo'>indyGo</li>
        <li className='navItem'>
          <Link to='/'>HOME</Link>
        </li>
        <li className='navItemAbout'>
         
          <Link to='/about'>ABOUT</Link>
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

