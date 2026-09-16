import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Acceuil from './components/Acceuil'
import Apropos from './components/Apropos'
import Categories from './components/Categories'
import Footer from './Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Acceuil />
      <Apropos />
      <Categories />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
