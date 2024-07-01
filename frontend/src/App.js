import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import NavBar from "./NavBar";
import About from "./components/About";
import Auth from "./components/Auth";
import Contact from "./components/Contact";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";

import Map from "./components/Map";

function App() {
  // const textstyle = {
  //   fontsize: "16px",
  // };
  // return <div style={textstyle}>Hello World</div>;
  // }
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
