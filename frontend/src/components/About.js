import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import myImage from '../publicphotos/greenbus.jpg'
export default function Home() {
  return (
    <>
      <img className='hero-image' alt='green bus' src= {myImage}></img>
      <div className='hero-section'>
        <h1 className='hero-header'>Bettering the community</h1>
          <br></br>
          <p className='hero-text'>
            <strong>
              Every day, we're dedicated to enhancing Indiana's bus stops, one
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
          Indiana's bus service history is deeply intertwined with the evolution of public transportation in the United States. The state's bus service began in the early 20th century as an answer to the growing need for efficient and affordable mass transit. The rise of the automobile had reduced the demand for interurban railways, prompting cities and towns to explore bus services as a flexible and cost-effective alternative. The earliest buses were often converted trucks, which provided a rudimentary but essential service, linking rural areas to urban centers and helping to foster economic growth and social mobility.
        <br></br>
          The Great Depression and World War II era marked a significant period of transformation for Indiana's bus service. Economic hardships necessitated cost-effective transportation solutions, and buses filled this role admirably. The Indiana Motor Bus Association, established during this period, played a pivotal role in standardizing services, advocating for better infrastructure, and coordinating routes. The war effort also boosted bus usage as fuel rationing and manufacturing priorities limited car production, making buses a crucial component of the home front's transportation network. This period also saw the consolidation of many smaller bus companies, leading to more organized and reliable services.
        <br></br>
          Post-World War II, Indiana experienced a surge in suburbanization, which posed new challenges and opportunities for bus services. As populations moved to the suburbs, bus routes had to be expanded and adapted to cover greater distances and more dispersed destinations. The 1950s and 1960s saw significant investments in road infrastructure, which benefited bus services. Companies like Greyhound and Trailways became prominent players, providing extensive intercity and interstate connections that facilitated long-distance travel. However, the rise of private car ownership began to pose a threat to bus ridership, prompting service providers to innovate and improve the quality and frequency of their offerings.
        </p>
      </div>
    </>
  );
}

