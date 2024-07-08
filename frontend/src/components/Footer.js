import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Call our Customer Care Center: 317-635-3344 Relay Indiana: 711 or
        Email us at "example@email.com" (Indiana)
      </p>
      <p className='Footer-Creators'>Site creators:</p>
      <ul className="footer-links">
        <li><a href="https://www.linkedin.com/in/quinn-lansbury-6a5a452b5/" target="_blank" rel="noopener noreferrer">Quinn</a></li>
        <li><a href="https://www.linkedin.com/in/ryan-fish-15791517b/" target="_blank" rel="noopener noreferrer">Ryan</a></li>
        <li><a href="https://www.linkedin.com/in/ivana-carrillo-8b1225293" target="_blank" rel="noopener noreferrer">Ivana</a></li>
        <li><a href="https://www.linkedin.com/in/alex-aubin-5740602a7/" target="_blank" rel="noopener noreferrer">Alex</a></li>
        <li><a href="https://www.linkedin.com/in/joe-reis-software-developer-b289802a2/" target="_blank" rel="noopener noreferrer">Joe</a></li>
      </ul>
    </footer>
  );
}

export default Footer;