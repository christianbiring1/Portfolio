import { useState } from "react";
import hamburger from "../assets/hamburger-menu-96.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={!isOpen ? "nav collapsible" : "nav collapsible collapsible--expanded"}>
      <a href="/"><h1>CB</h1></a>
      <img src={hamburger} alt="" className="nav__toggler" onClick={handleOpen} />
      <ul className="nav_list collapsible__content">
        <li className="nav__item"><a href="/" className="nav_link">Home</a></li>
        <li className="nav__item"><a href="#about" className="nav_link">About</a></li>
        <li className="nav__item"><a href="" className="nav_link">Projects</a></li>
        <li className="nav__item"><a href="" className="nav_link">Contact</a></li>
      </ul>
    </nav>
  );
}
 
export default NavBar;