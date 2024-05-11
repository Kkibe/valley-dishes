import React from 'react';
import './Dishes.css';
import Image1 from '../../assets/pizza.jpg';
import Image2 from '../../assets/chickenPiece.jpg';
import Image3 from '../../assets/dish.jpg';
import { FaEye, FaHeart, FaShoppingBasket, FaStar, FaStarHalf } from 'react-icons/fa';

export default function Dishes() {
  const toggleSingle = () => {
    document.querySelector('.single').classList.toggle('active');
  }
  const dishes = [
    {
      id: 1,
      title: "tasty food",
      price: 550,
      image: Image1,
      stars: 4.5,
      
    },
    {
      id: 2,
      title: "tasty food",
      price: 550,
      image: Image2,
      stars: 4.5,
      
    },
    {
      id: 3,
      title: "tasty food",
      price: 550,
      image: Image3,
      stars: 4.5,
      
    },
  ];
  const Dish = ({data}) => {
    return (
    <div className="dish">
      <a className="icon heart"><FaShoppingBasket /></a>
      <a className="icon eye" onClick={toggleSingle}><FaEye /></a>
      <img src={data.image} alt="" />
      <h3>{data.title}</h3>
      <div className="stars">
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStar className='star'/>
          <FaStarHalf className='star'/>
      </div>
      <span>KSH {data.price}</span>
      <a className='btn'>Add Cart</a>
    </div>
    )
  }
  return (
    <section className='dishes' id='dishes'>
        <h3 className="sub-heading">Our dishes</h3>
        <h1>popular dishes</h1>

        <div className="box-container">
          {
            dishes && dishes.map(item => {
              return <Dish data={{...item}} key={item.id} />
            })
          }
        </div>
    </section>
  )
}
