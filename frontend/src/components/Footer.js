import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Call our Customer Care Center: 317-635-3344 Relay Indiana: 711 or
        Email us at "example@email.com" (Indiana)
      </p>
      <p className='Footer-Creators'>Creators</p>
      <ul className="footer-links">
        <li><a href="https://www.linkedin.com/in/quinn-lansbury-6a5a452b5/">Quinn</a></li>
        <li><a href="https://www.linkedin.com/in/ryan-fish-15791517b/">Ryan</a></li>
        <li><a href="https://www.linkedin.com/in/ivana-carrillo-8b1225293">Ivana</a></li>
        <li><a href="https://www.linkedin.com/in/alex-aubin-5740602a7/">Alex</a></li>
        <li><a href="https://www.linkedin.com/in/joe-reis-software-developer-b289802a2/">Joe</a></li>
      </ul>
    </footer>
  );
}

export default Footer;