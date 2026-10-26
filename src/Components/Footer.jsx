import React from 'react'
import "../Styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       <div className="footer-box">
         <h2>Coffee House</h2>          <p>
            Freshly brewed coffee made with passion.
            Every cup is prepared to make your day
            warm and memorable.
          </p>
        </div>
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
             <div className="footer-box">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> New Delhi, India</p>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <p><FaEnvelope /> coffeehouse@gmail.com</p>
        </div>
        <div className="footer-box">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        © 2026 Coffee House | All Rights Reserved
      </div>
    </footer>
       );
    }

export default Footer;




