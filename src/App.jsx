import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      <ScrollToTop smooth color='white' style={{backgroundColor: '#3BB2F6', display:'flex',alignItems:'center', justifyContent:'center'}}/>
    </div>
  )
}

export default App
