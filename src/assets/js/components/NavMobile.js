import React from 'react'
import NavLink from './NavLink.js'

function NavMobile() {
  return (
    <nav className='nav-mobile' role='navigation'>
      <NavLink
        link={{ url: '#about', text: 'Su di me' }}
      />
      <NavLink
        link={{ url: '#study', text: 'Formazione' }}
      />
      <NavLink
        link={{ url: '#therapy', text: 'Di cosa mi occupo' }}
      />
      <NavLink
        link={{ url: '#contact', text: 'Contatti' }}
      />
    </nav>
  )
}

export default NavMobile
