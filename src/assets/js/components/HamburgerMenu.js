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

export default HamburgerMenu
