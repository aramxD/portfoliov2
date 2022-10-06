import { useState } from 'react'
import Hero from './sections/Hero' 
import Navbar from './sections/Navbar'
import AboutMe from './sections/AboutMe' 
import Skills from './sections/Skills' 
import Projects from './sections/Projects' 
import Contact from './sections/Contact' 
import Footer from './sections/Footer'  

import './App.css'

function App() {
  

  return (
    <>
    <Hero/>
    <Navbar/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App
