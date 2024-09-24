import React from 'react'
import './hero.css';
import imageOne from './../../Assets/image 1.png'
import { IoIosArrowForward } from "react-icons/io";


const hero = () => {
  return (
    <div className="fashion-banner">
      <div className="text-content">
      <h4>Trending Collection 2024</h4>
      <h1>Inspired by <br/>your fashion <br/>dream</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at <br/>tellus sed vel neque sapien. Ac</p>
      <a href="/" className="shop-now-btn">Shop Now <IoIosArrowForward/> </a>
      </div>
     <div className="image-content">
      <img 
        src = {imageOne} 
        alt="Woman holding shopping bags" 
        className="fashion-image"
      />
      </div>
  </div>
  )
}

export default hero