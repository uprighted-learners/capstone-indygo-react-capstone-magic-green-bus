import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/Auth'>AUTH</Link>
        </li>
        <li>
          <Link to='/contacts'>CONTACTS</Link>
        </li>
        <li>
          <Link to='/locations'>LOCATIONS</Link>
        </li>
        <li>
          <Link to='/sponsor'>SPONSOR</Link>
        </li>
      </ul>
    </nav>
  );
}

