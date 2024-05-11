import React from 'react'
import './Menu.css';
import Image1 from '../../assets/burger.jpg';
import Image2 from '../../assets/pizza.jpg';
import Image3 from '../../assets/recipe.jpg';
import Image4 from '../../assets/chicken.jpg';
import Image5 from '../../assets/cake.jpg';
import Image6 from '../../assets/drink.jpg';
import {FaEye, FaStar, FaStarHalf } from "react-icons/fa";

export default function Menu() {
  const dishes = [
    {
      id: 1,
      title: "tasty food",
      price: 550,
      image: Image1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 2,
      title: "delicious food",
      price: 550,
      image: Image2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 3,
      title: "delicious food",
      price: 550,
      image: Image3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 4,
      title: "tasty food",
      price: 550,
      image: Image4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 5,
      title: "delicious food",
      price: 550,
      image: Image5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 6,
      title: "delicious food",
      price: 550,
      image: Image6,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
  ];
    const Item = ({data}) => {
      return(
        <div className="box">
            <div className="image">
                <img src={data.image} alt="" />
                <a href="#" className='icon'><FaEye /></a>
            </div>
            <div className="content">
                <div className="stars">
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStarHalf className='star'/>
                </div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <a href="#" className="btn">add to cart</a>
                <span className="price">KSH {data.price}</span>
            </div>
        </div>)
    }
  return (
    <section className='menu' id='menu'>
        <h3 className="sub-heading">our menu</h3>
        <h1>today's specialty</h1>
        <div className="box-container">
          {
            dishes && dishes.map(item => {
              return <Item data={{...item}} key={item.id} />
            })
          }
        </div>
    </section>
  )
}
