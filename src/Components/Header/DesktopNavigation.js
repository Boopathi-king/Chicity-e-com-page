import Navlinks from "./Navlinks"
import './Navbar.css'

const DesktopNavigation = () => {
  return (
    <nav className="DesktopNavigation">
        <h2 className="logo">CHICITY</h2>
        <Navlinks />
    </nav>
  )
}

export default DesktopNavigation