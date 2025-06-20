import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Service from './Website/Pages/Service'
import Features from './Website/Pages/Features'
import Notfound from './Website/Pages/Notfound'
import Contact from './Website/Pages/Contact'
import Team from './Website/Pages/Team'
import Testimonial from './Website/Pages/Testimonial'
import Appoinment from './Website/Pages/Appoinment'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/features' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/team' element={<Team />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/appoinment' element={<Appoinment />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
