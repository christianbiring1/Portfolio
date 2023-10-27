import React from 'react';  //eslint-disable-line
import profil from "../assets/chris.jpg";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <div className='hero-container' >
      <div className="hero_image">
        <img src={profil} alt="chris_picture" />
      </div>
      <div className="hero_intro">
        <div className="header">
          <h1 >Christian Biringanine</h1>
          <h3>Full Stack Software Developer</h3>
        </div>
        <p>I build accessible, inclusive products and digital experiences for the web.</p>
        <div className="socials">
          <a href="https://github.com/christianbiring1" target="_blank" rel="noopener noreferrer">
            <FaGithub  size={30} color='#171515'/>
          </a>
          <a href="https://www.instagram.com/christian__bir/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color='#d62976' />
          </a>
          <a href="https://twitter.com/Christianbirin4" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} color='#00acee' />
          </a>
          <a href="https://www.linkedin.com/in/christian-biringanine/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color='#0077b5' />
          </a>
        </div>
        <div className="cta">
          <button>
            <a href="#contact">Hire me</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;