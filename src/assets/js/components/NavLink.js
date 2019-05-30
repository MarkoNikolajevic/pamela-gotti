import React from 'react'

function NavLink(props) {
  return (
    <a className='nav-link nav-mobile-link' href={props.link.url}>{props.link.text}</a>
  )
}

export default NavLink
