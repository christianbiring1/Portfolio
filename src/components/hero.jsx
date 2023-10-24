import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <div className='hero-container' >
      <h1>Christian Biringanine</h1>
      <h4>Full Stack Software Developer</h4>
      <p>I build accessible, inclusive products and digital experiences for the web.</p>

      <div className="socials">
        <FaGithub  size={30} color='#333'/>
        <FaInstagram size={30} />
        <FaTwitter size={30} />
        <FaLinkedin size={30} />
      </div>
    </div>
  );
}

export default Hero;