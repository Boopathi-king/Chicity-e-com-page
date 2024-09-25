import React from 'react'
import './Navbar.css'

const Navlinks = ({isclicked, closeMenu}) => {
  return (
    <nav className='Navlinks'>
        <ul>
            <li onClick={() => isclicked && closeMenu()}><a href='/#Women'>Women</a></li>
            <li onClick={() => isclicked && closeMenu()}><a href='/#Men'>Men</a></li>
            <li onClick={() => isclicked && closeMenu()}><a href='/#Accessories'>Accessories</a></li>
            <li onClick={() => isclicked && closeMenu()}><a href="#new-arrivals">New Arrivals</a></li>
            <li onClick={() => isclicked && closeMenu()}><a href="#sale">Sale</a></li>
        </ul>
    </nav>
  )
}

export default Navlinks