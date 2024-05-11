import React from 'react';
import Image from '../../assets/burger.jpg';
import './Flyer.css';

export default function Flyer() {
  return (
    <section className='home' id='home'>
      <div className="flyer">
        <div className="content">
          <span>Our special dish</span>
          <h3>spicy noodles</h3>
          <p>We do cocktails and other drinks.</p>
          <a href="#" className='btn'>order now</a>
        </div>
        <div className="image">
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  )
}
