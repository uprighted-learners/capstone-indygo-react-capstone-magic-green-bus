import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className='contact-content'>
        <p>
          For any security/safety questions or concerns, please use the contact
          button below.
        </p>
        <a href='/contact'>
          <button className='contact-button'>Contact</button>
        </a>
      </div>
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
