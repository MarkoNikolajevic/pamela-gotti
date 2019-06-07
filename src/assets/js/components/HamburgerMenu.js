import React from 'react'

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActive: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
    const hamburger = document.querySelector('.hamburger-menu');
    const navMobile = document.querySelector('.nav-mobile');

    hamburger.classList.toggle('animated-menu')
    navMobile.classList.toggle('show-menu-mobile');
    closeNav()
  }

  render() {
    return (
      <div className='hamburger-menu' onClick={this.handleClick} aria-label='Menu' aria-controls='navigation'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    )
  }
}

// Close nav function
function closeNav() {
  let links = document.querySelectorAll('.nav-mobile-link');
  links = Array.from(links);
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      const hamburger = document.querySelector('.hamburger-menu');
      const navMobile = document.querySelector('.nav-mobile');
      navMobile.classList.remove('show-menu-mobile');
      hamburger.classList.remove('animated-menu');
    });
  });
}

export default HamburgerMenu
