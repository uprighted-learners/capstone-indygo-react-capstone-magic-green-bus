import React from 'react';
import './Contact.css';
import image1 from '../publicphotos/Assets/contact-page-image-1.png';
import image2 from '../publicphotos/Assets/contact-page-image-2.png';
import image3 from '../publicphotos/Assets/contact-page-image-3.png';

export default function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-content'>
          <div className='image-container'>
            <img
              className='security-image'
              src={image1}
              alt='lock pc screen'
            ></img>
            <img
              className='bus-image'
              src={image2}
              alt='yellow bus'
            ></img>
          </div>
          <p>
            For any security/safety questions or concerns, please use the
            contact button below.
          </p>

          <button className='contact-button'>Contact Bus Servicer</button>

          <img
            className='contact-image'
            src={image3}
            alt='information desk'
          ></img>
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
            Contact Site Manager
          </button>
        </div>
      </div>
    </>
  );
}

