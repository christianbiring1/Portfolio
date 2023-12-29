import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import PropTypes from 'prop-types';

import LanguageSwitcher from "./switchTrans";
import hamburger from "../assets/hamburger-menu-96.png";

const NavBar = (props) => {
  const { active, onBlackMode } = props;

  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const stylesIcon = {
    marginTop: "1rem",
    color: active ? "666" : "gray"
  };

  const styles= active ? {backgroundColor: '#d9d9d9'} : {};

  return (
    <nav className={!isOpen ? "nav collapsible" : "nav collapsible collapsible--expanded"} style={styles}>
      <a href="/"><h1>CB</h1></a>
      <img src={hamburger} alt="" className="nav__toggler" onClick={handleOpen} />
      <ul className="nav_list collapsible__content">
        <li className="nav__item"><a href="/" className="nav_link">{t('home')}</a></li>
        <li className="nav__item"><a href="#about" className="nav_link">{t('aboutTitle')}</a></li>
        <li className="nav__item"><a href="#projects" className="nav_link">{t('project')}</a></li>
        <li className="nav__item"><a href="#contact" className="nav_link">{t('navcta')}</a></li>
        {!active ? <MdDarkMode onClick={() => onBlackMode()} size={24} style={stylesIcon}/> : <MdLightMode onClick={() => onBlackMode()} size={24} style={stylesIcon}/>}
        <LanguageSwitcher />
      </ul>
    </nav>
  );
}

NavBar.prototype = {
  active: PropTypes.bool.isRequired,
  onBlackMode: PropTypes.func.isRequired
}
 
export default NavBar;