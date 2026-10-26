import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "../Styles/Services.css";
import { FaCoffee, FaTruck, FaLeaf, FaWifi, FaUserTie, FaHeart } from "react-icons/fa";
function Services() {
  const services = [
    {
      id: 1,
      icon: <FaCoffee />,
      title: "Premium Coffee",
      description: "Freshly roasted premium coffee beans for every cup."
    },
    {
      id: 2,
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "Hot and fresh coffee delivered right to your doorstep."
    },
    {
      id: 3,
      icon: <FaLeaf />,
      title: "Organic Beans",
      description: "100% organic coffee beans sourced from trusted farms."
    },
    {
      id: 4,
      icon: <FaWifi />,
      title: "Free WiFi",
      description: "Enjoy your coffee while staying connected."
    },
    {
      id: 5,
      icon: <FaUserTie />,
      title: "Expert Baristas",
      description: "Our skilled baristas prepare every cup with perfection."
    },
    {
      id: 6,
      icon: <FaHeart />,
      title: "Customer First",
      description: "We believe in quality service and customer satisfaction."
    }
  ];
  return (
    <>
    <Navbar/>
  
    <section className="services" data-aos="fade-left">
        <h4>OUR SERVICES</h4>
        <h1>Why Choose Our Coffee?</h1>
        <p className="service-text">
          We provide the best coffee experience with premium ingredients,
          expert baristas and exceptional customer service.
        </p>
        <div className="service-container">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
        <Footer/>
   </>
  )
}

export default Services