import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      {/* Brand Section */}
      <div className="footer-section">
        <h2 className="brand">CHICITY</h2>
        <p className="footer-text">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
          Nullam ae aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
          Pellentesque habitant.
        </p>
        <div className="social-icons">
          <FaFacebookF className='fab'/>
          <IoLogoInstagram className='fab'/>
          <FaXTwitter className='fab'/>
          <FaLinkedinIn className='fab'/>
        </div>
      </div>

      {/* Useful Links Section */}
      <div className="footer-section">
        <h3 className="footer-title">Useful Links</h3>
        <ul className="footer-list">
          <li className="list-item">Man</li>
          <li className="list-item">Woman</li>
          <li className="list-item">Accessories</li>
          <li className="list-item">Makeup</li>
        </ul>
      </div>

      {/* About Section */}
      <div className="footer-section">
        <h3 className="footer-title">About</h3>
        <ul className="footer-list">
          <li className="list-item">Shop</li>
          <li className="list-item">Product</li>
          <li className="list-item">Location</li>
          <li className="list-item">Contact</li>
        </ul>
      </div>

      {/* Terms & Service Section */}
      <div className="footer-section">
        <h3 className="footer-title">Terms & Service</h3>
        <ul className="footer-list">
          <li className="list-item">Security</li>
          <li className="list-item">Help</li>
          <li className="list-item">FAQ</li>
          <li className="list-item">Principles</li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer