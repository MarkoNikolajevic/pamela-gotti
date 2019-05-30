import React from 'react'
import markoNikolajevicLogo from '../../img/marko-nikolajevic-logo.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; 2019 Dott.ssa Pamela Gotti</p>
        <p>Via di Donota, 28 34121 Trieste</p>
        <p>345-1660590</p>
        <p>pamelagotti@libero.it</p>
        <p>www.pamelagotti.it</p>
        <p>P.IVA 01275270328</p>
        <p>creato da
          <a href='https://www.markonikolajevic.com/' target='_blank' rel='noopener noreferrer'>
            <img src={markoNikolajevicLogo} alt='Marko Nikolajevic logo'/>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
