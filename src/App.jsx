import React, { useEffect, useState } from 'react'; //eslint-disable-line
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
  const [isBlackMode, setIsBlackMode] = useState(false);


  const handleMode = () => {
    setIsBlackMode(!isBlackMode)
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  

  return (
    <Router>
      <div style={!isBlackMode ? {backgroundColor: '#fff'} : {backgroundColor: '#000'}}>
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
          <NavBar active={isBlackMode} onBlackMode={handleMode} />
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
      </div>
    </Router>
  )
}

export default App
