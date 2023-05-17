import React from "react";
import About from './AboutComponent';
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Services from "./ServicesComponent";
import { Routes, Route } from 'react-router-dom';


function Main() {
  return (
    <div>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
    </div>
  );
}

  
  export default Main;