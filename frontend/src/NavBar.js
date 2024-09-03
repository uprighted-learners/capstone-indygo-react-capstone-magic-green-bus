import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    // I had to restructure the navbar container to make it responsive and work with the css.

    <nav className='nav-wrapper'>
      <div className='nav-container'>
        <Link to='/' className='nav-name'>
          HOME
        </Link>
        <Link to='/map' className='nav-name'>
          MAP
        </Link>
        <Link to='/Auth' className='nav-name'>
          LOGIN
        </Link>
        <Link to='/contact' className='nav-name'>
          CONTACT US
        </Link>
        <Link to='/sponsor' className='nav-name'>
          SPONSOR
        </Link>
      </div>
    </nav>
  );
}

