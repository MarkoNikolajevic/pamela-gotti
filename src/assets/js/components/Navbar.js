import React from 'react'
import MediaQuery from 'react-responsive'
import NavLink from './NavLink'
import HamburgerMenu from './HamburgerMenu'

function Navbar() {
  return (
    <nav role='navigation' className='nav-flex'>
      <p className='brand-name'>
        Pamela Gotti <br/>
        <span className='subtitle'>Psicologa - Ipnologa - Consulente sessuale</span>
      </p>
      <MediaQuery query='(max-width: 1059px)'>
        <HamburgerMenu />
      </MediaQuery>
      <MediaQuery query='(min-width: 1060px)'>
        <NavLink
          link={{url: '#about', text: 'Su di me'}}
        />
        <NavLink
          link={{url: '#study', text: 'Formazione'}}
        />
        <NavLink
          link={{url: '#therapy', text: 'Di cosa mi occupo'}}
        />
        <NavLink
          link={{url: '#contact', text: 'Contatti'}}
        />
      </MediaQuery>
    </nav>
  )
}


export default Navbar
