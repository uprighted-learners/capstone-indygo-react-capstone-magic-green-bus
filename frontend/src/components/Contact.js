import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className='container'>
      <h1>
        If you have any questions or concerns please click the Indygo link and
        you will be redirected to resourses to get you connected to what you
        need help with!
      </h1>
      <p class='IndyContact'>
        <a
          style={{
            color: 'blue',
            padding: '10px',
            fontSize: '75px',
            display: 'flex',
            width: '15% ',
            paddingLeft: '25%',
          }}
          href='https://www.indygo.net/contact-us/'
        >
          IndyGo
        </a>
      </p>
      <div className='contact-pic'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MItdHg7Dft465SwXLUCH5IkW6bwP53V4LduwJQhMDI_-jDbmKhihTQqtIcicppNOoyo&usqp=CAU'
          alt='IndyGo Bus'
        />
      </div>
    </div>
  );
}

