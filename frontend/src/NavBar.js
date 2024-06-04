import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/Auth'>Auth</Link>
        </li>
        <li>
          <Link to='/contacts'>contacts</Link>
        </li>
        <li>
          <Link to='/locations'>Locations</Link>
        </li>
        <li>
          <Link to='/sponsor'>Sponsor</Link>
        </li>
      </ul>
    </nav>
  );
}

