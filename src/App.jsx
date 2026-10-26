import React from 'react'
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Page/Home";

import About from "./Page/About";
import Menu from "./Page/Menu";
import Services from "./Page/Services";
import Testimonial from "./Page/Testimonial";
import Gallery from "./Page/Gallery";
import Contact from "./Page/Contact";
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/menu" element={<Menu/>}/>\
    <Route path= "/services" element={<Services/>}/>
    <Route path="/testimonial" element={<Testimonial/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
 </Routes>
   </>
  )
}
export default App;