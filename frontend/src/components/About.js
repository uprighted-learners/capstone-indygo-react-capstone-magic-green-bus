import React from 'react';
import './About.css';


export default function About() {
  return (
<>
<div className='Hero-Content'>
<p className='Everything-About-Us'>Everything- About Us</p>
<h1 className='hero-header'>About IndyGo</h1>
<p> IndyGo actively engages with the community through various outreach programs, partnerships, and initiatives aimed at improving public transportation access and sustainability efforts in Indianapolis.</p>
</div>
<div className='Hero-Image'>
  <img  className='Hero-Image' src='https://www.swg.com/can/wp-content/uploads/sites/38/2014/09/About-us-banner.jpg'></img>
</div>

    <div className='Contact-Container-Row'>
      <h1 className='Row-Header'>About Us</h1>
      <p className='about-content'>Hello, we are IndyGo, one of the largest transportation businesses in Indianapolis. A common goal among IndyGo is that of bettering the community. Seamlessly, this website is centered around allowing a user to pick a bus stop and keep track of who's going to clean it (sponsoring). No approval needed—just select a stop and get started. This website is highly immersive if you're looking to get involved. If you're feeling extra zestful, please think about setting up a time to sponsor a bus stop. Given that this website is primarily centered around transforming the community, we're looking for individuals with a green thumb and a love for the environment</p>
      <div className='about-pic'>

        <img
        className='Banner-About'
          style={{ width: '30%' }}
          src='https://st2.depositphotos.com/3765139/6173/i/950/depositphotos_61730885-stock-photo-old-bus-retro-style2.jpg'
          alt='IndyGo Bus'
        />
       
      </div>
    </div>
      <img
        style={{ width: '30%' }}
        src='https://st2.depositphotos.com/3765139/6173/i/950/depositphotos_61730885-stock-photo-old-bus-retro-style2.jpg'
        alt='IndyGo Bus'
      />
      <div className='randomParagraph'>
        <p>
        At IndyGo, our vision is to create a cleaner and more vibrant community where every bus stop becomes a beacon of cleanliness and pride. We believe in empowering locals to take ownership of their surroundings by offering a seamless platform that connects sponsors directly with bus stops in need of care. Through this initiative, we aim to foster a sense of responsibility and community spirit, encouraging everyone to play an active role in enhancing our urban environment. Together, we can transform ordinary bus stops into inviting spaces that reflect our collective commitment to sustainability and community well-being.
        </p>
      </div>
      <div className='contact-pic'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MItdHg7Dft465SwXLUCH5IkW6bwP53V4LduwJQhMDI_-jDbmKhihTQqtIcicppNOoyo&usqp=CAU'
          alt='IndyGo Bus'
        />
      </div>
      <p>
        A few facts about Indygo that might prove instresting is the founding,  IndyGo, officially known as the Indianapolis Public Transportation Corporation (IPTC), was established in 1975 to oversee public transportation services in Indianapolis, Cultivating the Corporation sense 1975 has given IndyGo time to establish their desire, dedication, and discipline towards being the best.
      </p><br></br>
      <p>     Indiana. over the years the growth and expansion was very impressive, given IndyGo has become the largest public transportation service in the state of indiana serving Marion County. With our website handling all the stops in Marion County you can count on us to provide accurate information on the location, of your desired stop. </p>
    </>
  );
}

