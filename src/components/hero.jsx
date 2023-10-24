// import React from 'react';
// import { Link } from 'react-router-dom';
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
          <FaGithub  size={30} color='#171515'/>
          <FaInstagram size={30} color='#d62976' />
          <FaTwitter size={30} color='#00acee' />
          <FaLinkedin size={30} color='#0077b5' />
        </div>
        <div className="cta">
          <button>Hire me</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;