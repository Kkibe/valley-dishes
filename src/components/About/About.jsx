import React from 'react';
import './About.css';
import Image from '../../assets/ValleyEats.png';
import {FaDollarSign, FaHeadset, FaShippingFast } from "react-icons/fa";

export default function About() {
  return (
    <section className='about' id='about'>
        <h3 className="sub-heading">about us</h3>
        <h1>why choose us?</h1>
        
        <div className="row">
            <div className="image">
                <img src={Image} alt="" />
            </div>
            <div className="content">
                <h3>best food in town</h3>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.
                </p>
                <div className="icons-container">
                    <div className="icons">
                        <FaShippingFast className='icon'/>
                        <span>Free delivery</span>
                    </div>
                    <div className="icons">
                        <FaDollarSign className='icon'/>
                        <span>easy payments</span>
                    </div>
                    <div className="icons">
                        <FaHeadset className='icon'/>
                        <span>27/7 service</span>
                    </div>
                </div>
                <a href="#" className="btn">learn more</a>
            </div>
        </div>
    </section>
  )
}
