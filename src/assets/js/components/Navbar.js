import React from 'react'
import MediaQuery from 'react-responsive'
import NavLink from './NavLink'
import HamburgerMenu from './HamburgerMenu'

function Navbar() {
  return (
    <nav role='navigation' className='nav-flex'>
      <p className='brand-name'>
        Pamela Gotti <br/>
        <span className='subtitle'>Psicologa Psicoterapeuta</span>
      </p>
      <MediaQuery query='(max-width: 768px)'>
        <HamburgerMenu />
      </MediaQuery>
      <MediaQuery query='(min-width: 769px)'>
        <NavLink
          link={{url: '#about', text: 'Su di me'}}
        />
      </MediaQuery>
    </nav>
  )
}


export default Navbar
