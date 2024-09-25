import React from 'react'
import './Navbar.css';
// import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo">
      <h1>CHICITY</h1>
    </div>
    <ul className="nav-links">
      <li><a href="#women">Woman</a></li>
      <li><a href="#men">Man</a></li>
      <li><a href="#accessories">Accessories</a></li>
      <li><a href="#new-arrivals">New Arrivals</a></li>
      <li><a href="#sale">Sale</a></li>
    </ul>
    <div className="nav-icons">
      <input type="text" placeholder="Search for products" className="search-input" />
      <i className="fas fa-search"></i>
      <i className="fas fa-shopping-cart"></i>
      <i className="fas fa-user"></i>
    </div>
    <button>
      {/* <FaBars/> */}
    </button>
  </nav>


  )
}

export default Navbar