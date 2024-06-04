import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Contact from './components/Contact';
import Locations from './components/Locations';
import Sponsor from './components/Sponsor';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' components={<Home />} />
        <Route path='/about' components={<About />} />
        <Route path='/auth' components={<Auth />} />
        <Route path='/contact' components={<Contact />} />
        <Route path='/locations' components={<Locations />} />
        <Route path='/sponsor' components={<Sponsor />} />
      </Routes>
    </Router>
  );
}

export default App;

