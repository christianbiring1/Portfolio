import { useEffect } from 'react';
import AOS from 'aos';
import Hero from './components/hero';
import 'aos/dist/aos.css'
import './App.scss'

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <Hero />
    </div>
  )
}

export default App
