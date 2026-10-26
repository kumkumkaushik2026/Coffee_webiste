import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Home.css";
import heroImage from "../assets/heroImage.jpg";
import React from 'react'

function Home() {
  return (
    <>
    <Navbar/>
   
    <section className="home" data-aos="fade-up">
       <div className="home-content">
          <h3>Welcome To Coffee House</h3>
          <h1>
            Freshly Brewed <br />
            Coffee in Every Cup
          </h1>
          <p>
            Discover the rich aroma and premium taste of handcrafted
            coffee made from freshly roasted beans.
            Every sip is a perfect experience.
          </p>
          <div className="home-btns">
            <button className="order-btn">
              Order Now
            </button>
            <button className="menu-btn">
              View Menu
            </button>
          </div>
        </div>
             <div className="home-image">
          <img src={heroImage} alt="Coffee" />
        </div>
</section>
 <Footer/>
    </>
  )
}

export default Home