import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-content'>
          <img
            className='security-image'
            src='https://cdn.discordapp.com/attachments/1259668960912212029/1260017993316831324/e11b8411-a122-4d43-9fa9-ea3898675109.jpg?ex=668dcab3&is=668c7933&hm=044f95ab5f507e270ed84f26989e3fea3bbaba564bf39ad192f3a2a1e0f15dcb&'
            alt=''
          ></img>
          <img
            className='bus-image'
            src='https://cdn.discordapp.com/attachments/1259668960912212029/1260017403811725342/1cdc7c55-56f8-4759-97f2-dfdf370c5ba5.jpg?ex=668dca27&is=668c78a7&hm=6041e0c68603076bdb1fd5aa74be13ea495040645068d22b0abe56f47a4106ca&'
            alt=''
          ></img>
          <p>
            For any security/safety questions or concerns, please use the
            contact button below.
          </p>

          <button className='contact-button'>Contact Bus Servicer</button>

          <img
            className='contact-image'
            src='https://cdn.discordapp.com/attachments/1259668960912212029/1260016300894322738/6479a0f6-1ff5-4016-afe3-758b5b67558c.jpg?ex=668dc920&is=668c77a0&hm=a21ac55f22111a917e8c662f518fd2aee2e7c8326b95970048e0517aef87a7fa&'
            alt=''
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

