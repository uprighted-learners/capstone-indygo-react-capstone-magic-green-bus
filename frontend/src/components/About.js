import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import myImage from '../publicphotos/UELE4484.PNG'
export default function Home() {
  return (
    <>
      <img className='hero-image' alt='green bus' src= {myImage}></img>
      <div className='hero-section'>
        <h1 className='hero-header'>Bettering the community</h1>
          <br></br>
          <p className='hero-text'>
            <strong>
              Every day, we're dedicated to enhancing Vermont's bus stops, one
              clean-up at a time. Join us — all we need are passionate locals like
              you!
            </strong>
          </p>
        <button type='submit' className='Home-Button'>
          <Link to='/sponsor'>Sponsor a stop</Link>
        </button>
      </div>
      <div className='paragraph-wrapper'>
        <p className='paragraph-hero'>
        Transportation in Vermont, particularly through the use of buses, has a rich history that reflects the state's commitment to accessibility and sustainability. The development of bus services in Vermont began in the early 20th century, as the need for reliable public transportation grew alongside the rise of the automobile. Initially, buses served as a crucial link between rural communities and urban centers, providing residents with access to jobs, education, and essential services. Over the decades, the state has seen a gradual expansion of its bus networks, with services like the Green Mountain Transit (GMT) playing a pivotal role in connecting various regions. GMT, which evolved from the Chittenden County Transportation Authority, has been instrumental in enhancing public transit options in the Burlington area and beyond.  </p>
<br></br>
<p className='paragraph-hero'>The importance of bus transportation in Vermont cannot be overstated, as it serves as a lifeline for many residents, particularly in rural areas where other forms of public transit are limited. Buses offer an affordable and environmentally friendly alternative to personal vehicles, helping to reduce traffic congestion and lower carbon emissions. This is particularly significant in Vermont, a state known for its commitment to environmental conservation and sustainability. Public transportation initiatives, including bus services, are supported by state policies aimed at reducing the carbon footprint and promoting green energy solutions. Additionally, buses provide essential services for those without access to private vehicles, including the elderly, students, and low-income individuals, thereby promoting social equity and inclusion.</p>

<br></br>
<p className='paragraph-hero'>In recent years, the growth of bus transportation in Vermont has been marked by efforts to modernize and expand services to meet the evolving needs of its population. This includes the introduction of more efficient and eco-friendly buses, such as those powered by electricity or alternative fuels. Vermont has also focused on improving the frequency and coverage of bus routes, making public transit more convenient and accessible. Technological advancements, such as real-time tracking and mobile ticketing, have further enhanced the user experience, encouraging more residents to opt for public transportation. As Vermont continues to prioritize sustainable development, the role of buses in the state's transportation landscape is expected to grow, supporting both economic growth and environmental stewardship.</p>
      
      </div>
    </>
  );
}

