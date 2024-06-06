import React from "react";
import Auth from "./components/Auth";
import Navigation from "./components/Nav.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
          <Auth />
          <Routes>        
            <Route path="/login" element={<Auth />} />
          </Routes>
      </div>
    </Router>
  );
}
