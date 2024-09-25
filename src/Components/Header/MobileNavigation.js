import Navlinks from "./Navlinks";
import './Navbar.css'
import {MdOutlineMenu} from 'react-icons/md';
import { useState } from "react";
import {MdClose} from 'react-icons/md';


const MobileNavigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);


    const Hamburger = <MdOutlineMenu className="HamburgerMenu"
    size="30px" color="black"
    onClick={() => setClick(!click)}
    />

    const Close = <MdClose className="HamburgerMenu"
            size="30px" color="black"
           onClick={() => handleClick(!click)} />


  return (
    <nav className="MobileNavigation">
        <h2 className="logo">CHICITY</h2>
        {click ? Close : Hamburger}
        {/* {click && <Navlinks/>} */}
        {click && <Navlinks isClicked={true} closeMenu={closeMenu}/>}
    </nav>
  )
}

export default MobileNavigation;