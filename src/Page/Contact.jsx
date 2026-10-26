import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ContactBg from "../assets/ContactBg.png";
import "../Styles/Contact.css";
function Contact() {
  return (
    <>
    <Navbar/>
   
   <section
  className="contact" data-aos="fade-up"
  style={{ backgroundImage: `url(${ContactBg})` }}
>
        <div className="contact-overlay">
          <div className="contact-box">
            <h4>CONTACT US</h4>
            <h1>Get In Touch</h1>
            <form>
              <input
                type="text"
                placeholder="Your Name"
              />
              <input
                type="email"
                placeholder="Your Email"
              />
              <input
                type="tel"
                placeholder="Phone Number"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <button>
                Send Message
              </button>
            </form>
          </div>
       </div>
      </section>
       <Footer/>
   </>
  )
}

export default Contact