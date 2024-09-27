import React from 'react'
import './Navbar.css'
import { IoBagOutline } from "react-icons/io5";


const Navlinks = ({isclicked, closeMenu}) => {
  return (
    <nav className='Navlinks'>
        <ul className='link-items'>
            <li onClick={() => isclicked && closeMenu()}><a href='/#Women'>Women</a></li>
            <li onClick={() => isclicked && closeMenu()}><a href='/#Men'>Men</a></li>
            <li onClick={() => isclicked && closeMenu()}><a href='/#Accessories'>Accessories</a></li>
            <li onClick={() => isclicked && closeMenu()}><a href="#new-arrivals">New Arrivals</a></li>
            <li onClick={() => isclicked && closeMenu()}><a href="#sale">Sale</a></li>
        </ul>
        <IoBagOutline className='bag-icon'/>
    </nav>
  )
}

export default Navlinks