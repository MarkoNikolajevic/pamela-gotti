import React from 'react'
import '../style/App.sass'
import Navbar from './components/Navbar.js'
import AboutMe from './components/AboutMe.js'
import Study from './components/Study.js'
import Therapy from './components/Therapy.js'
import Form from './components/Form.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Study />
      <Therapy />
      <Form />
      <Footer />
    </div>
  )
}

export default App
