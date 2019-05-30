import React from 'react'
import MediaQuery from 'react-responsive'
import NavLink from './NavLink'
import HamburgerMenu from './HamburgerMenu'

function Navbar() {
  return (
    <nav role='navigation'>
      <h1 className='brand-name'>
        Pamela Gotti
      </h1>
      <h2 className='subtitle'>
        Psicologa Psicoterapeuta
      </h2>
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
