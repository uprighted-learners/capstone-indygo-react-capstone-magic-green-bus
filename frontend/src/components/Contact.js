import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-content'>
          <p>
            For any security/safety questions or concerns, please use the
            contact button below.
          </p>

          <button className='contact-button'>Click Me</button>

          <p>
            For any website related issues please contact William by clicking
            the button below.
          </p>
          <button
            className='contact-button'
            onClick={() =>
              alert(
                'Please contact William @ 123-456-7894 if there are issues with the website',
              )
            }
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

