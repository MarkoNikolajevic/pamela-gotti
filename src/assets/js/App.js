import React from 'react'
import '../style/App.sass'
import Navbar from './components/Navbar.js'
import NavMobile from './components/NavMobile.js'
import AboutMe from './components/AboutMe.js'
import Study from './components/Study.js'
import Therapy from './components/Therapy.js'
import Form from './components/Form.js'
import Footer from './components/Footer.js'
import ScrollToTopBtn from './components/ScrollToTopBtn';

function App() {
  return (
    <div>
      <Navbar />
      <NavMobile />
      <AboutMe />
      <Study />
      <Therapy />
      <Form />
      <Footer />
      <ScrollToTopBtn />
    </div>
  )
}

export default App
