import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <div className='contact-us'></div>
      <div className='contact-content'>
        <p>
          For any security/safety questions or concerns, please contact IndyGo
          by clicking the button below.
        </p>
        <a href='https://www.indygo.net/contact-us/'>
          <button className='contact-button'>Contact IndyGo</button>
        </a>
      </div>
      {/* this button is not linking to indygo's contact web page do to moving the button around in teh web page */}
      <br></br>
      <div className='contact-content'>
        <p>
          For any website related issues please contact William by clicking the
          button below.
        </p>
        <button className='contact-button'>Click Me</button>
      </div>
      <br></br>
    </>
  );
}

