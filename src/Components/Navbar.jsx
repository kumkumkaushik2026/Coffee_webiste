import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";
import React from 'react';
import logo from "../assets/Logo.png";
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt="Coffee-logo" width="60"/>
      </div>

      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
       <li><Link to="/services">Services</Link></li>
       <li><Link to="/testimonial">Testimonial</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
<div className='nav-btn'>
      <button>Order Now</button>
      </div>
    </nav>
  );
}

export default Navbar;

