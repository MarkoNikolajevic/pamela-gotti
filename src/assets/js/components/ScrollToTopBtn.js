import React from 'react'
import {TinyButton as ScrollUpButton} from 'react-scroll-up-button'

class ScrollToTopBtn extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          ContainerClassName='fab-btn'
        />
      </div>
    )
  }
}

export default ScrollToTopBtn