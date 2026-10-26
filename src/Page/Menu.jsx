import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "../Styles/Menu.css";

import cappuccino from "../assets/Cappuccino_Coffee.png";
import latte from "../assets/Latte_Coffee.png";
import espresso from "../assets/Espresso_Coffee.png";
import mocha from "../assets/Mocha_Coffee.png";
import americano from "../assets/Americano_coffee.png";
import cold_coffee from "../assets/Cold_coffee.png";
import Flatwhite from "../assets/Flatwhite_Coffee.png";
import icedlatte from "../assets/icedlatte_Coffee.png";
import macchiato from "../assets/Macchiato_Coffee.png";
function Menu() {
  const coffees = [
    {
      id:1,
      image:cappuccino,
      name:"Cappuccino",
      price:"₹220",
      desc:"Rich & Creamy"
    },
    {
      id:2,
      image:latte,
      name:"Latte",
      price:"₹180",
      desc:"Smooth Milk Coffee"
    },
    {
      id:3,
      image:espresso,
      name:"Espresso",
      price:"₹150",
      desc:"Strong Coffee Shot"
    },
    {
      id:4,
      image:mocha,
      name:"Mocha",
      price:"₹240",
      desc:"Chocolate Coffee"
    },
    {
      id:5,
      image:americano,
      name:"Americano",
      price:"₹170",
      desc:"Classic Black Coffee"
    },
   {
  id: 6,
  image: cold_coffee,
  name: "Cold Coffee",
  price: "₹210",
  desc: "Refreshing Chilled Coffee"
},
{
  id: 7,
  image: macchiato,
  name: "Macchiato",
  price: "₹230",
  desc: "Espresso with Milk Foam"
},
{
  id: 8,
  image: Flatwhite,
  name: "Flat White",
  price: "₹210",
  desc: "Smooth & Velvety"
},
{
  id: 9,
  image: icedlatte,
  name: "Iced Latte",
  price: "₹250",
  desc: "Refreshing Cold Coffee"
}
  ];
  return (
    <>
    <Navbar/>
   
      <section className="menu" data-aos="zoom-in">
        <h4>OUR MENU</h4>
        <h1>Choose Your Favorite Coffee</h1>
        <div className="menu-container">
          {coffees.map((coffee)=>(
            <div className="menu-card" key={coffee.id}>
              <img src={coffee.image} alt={coffee.name}/>
              <h2>{coffee.name}</h2>
              <h3>{coffee.price}</h3>
              <p>{coffee.desc}</p>
              <button>Order Now</button>
            </div>
          ))}
        </div>
      </section>
       <Footer/>
    </>
  )
}

export default Menu;