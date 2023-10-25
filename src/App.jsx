import React, { useEffect } from 'react'; //eslint-disable-line
import AOS from 'aos';
import NavBar from './components/navBar';
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import 'aos/dist/aos.css'
import './App.scss'

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  

  return (
    <>
    <div className="menu">
      <NavBar />
    </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </>
  )
}

export default App
