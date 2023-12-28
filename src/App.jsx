import React, { useEffect } from 'react'; //eslint-disable-line
import { Route, BrowserRouter as Router } from "react-router-dom"; //eslint-disable-line
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import NavBar from './components/navBar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import 'aos/dist/aos.css'
import './App.scss'

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  

  return (
    <Router>
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #713200',
            color: '#713200',
            fontSize: '1.5rem'
          }
        }}
      />
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
        <Projects />
      </div>
      <div data-aos="fade-right" data-aos-duration="1000">
        <Contact />
      </div>
    </Router>
  )
}

export default App
