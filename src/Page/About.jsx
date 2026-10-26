import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import aboutImg from "../assets/About.jpg";
import "../Styles/About.css";
function About() {
  return (
    <>
    <Navbar/>
  
    <section className="about-section" data-aos="fade-right">
        <div className="about-container">
         <div className="about-image">
            <img src={aboutImg} alt="Coffee Shop" />
          </div>         
          <div className="about-content">
            <h4>ABOUT US</h4>
            <h1>Serving Premium Coffee Since 2010</h1>
            <p>
              We believe every cup tells a story. Our coffee is made from
              carefully selected beans and prepared by expert baristas to
              provide the perfect coffee experience.
            </p>
            <ul>
              <li>✔ Premium Coffee Beans</li>
              <li>✔ Expert Baristas</li>
              <li>✔ Cozy Environment</li>
              <li>✔ Freshly Brewed Daily</li>
            </ul>
            <button>Read More</button>
          </div>
        </div>
      </section>
        <Footer/>
    </>
  )
}

export default About