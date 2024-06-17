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

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/sponsor' element={<Sponsor />} />

      </Routes>
    </Router>
  );
}

export default App;