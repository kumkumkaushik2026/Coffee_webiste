import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/Testimonial.css";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";
import user7 from "../assets/user7.jpg";
import user8 from "../assets/user8.jpg";
import { FaStar } from "react-icons/fa";
function Testimonials() {
   const reviews = [

    {
      id:1,
      image:user1,
      name:"Anshika Tongar",
      review:"The coffee is absolutely amazing! The aroma, taste, and service are outstanding."
    },

    {
      id:2,
      image:user2,
      name:"Priya Singh",
      review:"A beautiful coffee shop with friendly staff. I always enjoy spending time here."
    },

    {
      id:3,
      image:user3,
      name:"Komal sharma",
      review:"Fast delivery and delicious coffee. Highly recommended!"
    },
    {
      id:4,
      image:user4,
      name:"Gungun verma",
      review:"Awesome in taste , highly recommended!"
    },
    {
      id:5,
      image:user5,
      name:"Preet kaur",
      review:"Delicious in taste and easily available!"
    },
    {
      id:6,
      image:user6,
      name:"Nimisha bhati",
      review:"Trusted in making orders, delicious!"
    },
    {
      id:7,
      image:user7,
      name:"Aman rawat",
      review:"Trusted orders and delicious coffee. Highly recommended!"
    },
{
      id:8,
      image:user8,
      name:"Ajay chandila",
      review:"Fast delivery and delicious coffee. Highly recommended!"
    }

  ];
  return (
    <>
    <Navbar/>
    
    <section className="testimonial" data-aos="flip-up">
        <h4>TESTIMONIALS</h4>
        <h1>What Our Customers Say</h1>
        <div className="testimonial-container">
          {reviews.map((item)=>(
            <div className="testimonial-card" key={item.id}>
              <img src={item.image} alt={item.name}/>
              <div className="stars">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <p>{item.review}</p>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
     </section>
     <Footer/>
    </>
  )
}

export default Testimonials