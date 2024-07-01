import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './NavBar';
import About from './components/About';
import Auth from './components/Auth';
import Contact from './components/Contact';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import Header from './components/Header.jsx'

import Map from './components/Map';

function App() {
  return (
    <Router>
<Header />
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sponsor' element={<Sponsor />} />
        <Route path='/map' element={<Map />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

