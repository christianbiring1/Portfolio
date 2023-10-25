import { useEffect } from 'react';
import AOS from 'aos';
import Hero from './components/hero';
import About from './components/about';
import NavBar from './components/navBar';
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
    </>
  )
}

export default App
