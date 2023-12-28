import { useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./switchTrans";
import hamburger from "../assets/hamburger-menu-96.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={!isOpen ? "nav collapsible" : "nav collapsible collapsible--expanded"}>
      <a href="/"><h1>CB</h1></a>
      <img src={hamburger} alt="" className="nav__toggler" onClick={handleOpen} />
      <ul className="nav_list collapsible__content">
        <li className="nav__item"><a href="/" className="nav_link">{t('home')}</a></li>
        <li className="nav__item"><a href="#about" className="nav_link">{t('aboutTitle')}</a></li>
        <li className="nav__item"><a href="#projects" className="nav_link">{t('project')}</a></li>
        <li className="nav__item"><a href="#contact" className="nav_link">{t('navcta')}</a></li>
        <LanguageSwitcher />
      </ul>
    </nav>
  );
}
 
export default NavBar;