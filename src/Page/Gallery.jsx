
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "../Styles/Gallery.css";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";
import gallery12 from "../assets/gallery12.jpg";
import gallery13 from "../assets/gallery13.jpg";
import gallery14 from "../assets/gallery14.jpg";
import gallery15 from "../assets/gallery15.jpg";


function Gallery() {
  return (
    <>
    <Navbar/>
   
    <section className="gallery" data-aos="zoom-in">
      <h4>OUR GALLERY</h4>
      <h1>Experience the Art of Coffee</h1>
      <div className="gallery-slider">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
        <img src={gallery6} alt="" />
        <img src={gallery7} alt="" />
        <img src={gallery8} alt="" />
        <img src={gallery9} alt="" />
        <img src={gallery10} alt="" />
        <img src={gallery11} alt="" />
        <img src={gallery12} alt="" />
        <img src={gallery13} alt="" />
        <img src={gallery14} alt="" />
        <img src={gallery15} alt="" />
             </div>
         </section>
          <Footer/>
    </>
  )
}

export default Gallery