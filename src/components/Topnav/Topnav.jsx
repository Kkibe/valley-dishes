import React, { useState } from 'react';
import './Topnav.css';
import { FaBars, FaHeart, FaSearch, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Topnav() {
    const [opened, setOpened] = useState(false)
    const nav = document.querySelector('nav');

    const handleToggle = async () => {
        nav.classList.toggle('active');
        setOpened(!opened);
    }
    document.body.onscroll = () => {
        if(nav.classList.contains('active')) {
            setOpened(nav.classList.remove('active'));
        }
    }
    const handleOpenSearch = () => {
        document.querySelector('#search-form').classList.toggle('active');
    }
  
  return (
    <header>
        <a href="/" className="logo"><FaUtensils /> Valley</a>
        <nav>
            <a href="#home" className='active'>Home</a>
            <a href="#dishes">Dishes</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#review">Review</a>
            <a href="#order">Order</a>
        </nav>
        <div className="icons">
            <div className="icon" id='menu-bars' onClick={handleToggle}>
                {
                    opened ? <FaXmark /> : <FaBars />
                }
            </div>
            <div className="icon" id='search-icon'  onClick={handleOpenSearch}><FaSearch/></div>
            
            
            <a href='#' className='icon' id='favorite'><FaHeart /></a>
            <a href='#' className='icon' id='bars'><span>3</span><FaShoppingCart /></a>
        </div>
    </header>
  )
}
