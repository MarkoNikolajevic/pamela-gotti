import React from 'react'
import Timeline from './Timeline.js'
import MediaQuery from 'react-responsive'
import pubblicazioni from '../../img/pubblicazioni.svg'

function Study() {
  return (
    <section id='study'>
      <div className='container'>
        <h3 className='section-title'>Percorso formativo</h3>
        <div className='study-grid'>
          <Timeline />
          <MediaQuery query='(min-width: 1024px)'>
            <img src={pubblicazioni} alt='disegno di una donna che scrive' className='study-img' id='study-img'></img>
          </MediaQuery>
          <div className='pubblications' id='pubblicazioni'>
            <h3 className='section-title'>Pubblicazioni</h3>
            <ul className='pubblications-list'>
              <li>Clarici A., Gotti P., Travan L. & Bava A. (2002) A single case study of anterograde amnesia due to a right-hemisphere lesion presented from a depth neuropsycology perspective. Forum 2002 of European of Neuroscience Parigi 12-18 luglio 2002 (abstract)</li>
              <li><a className='book-link' href='https://www.lapiccolavolante.net/libri/9-l-attesa-9788897785057.html' target='_blank' rel='noopener noreferrer'>L'attesa (LaPiccolaVolante, 2013, Cagliari) – opera di narrativa</a></li>
              <li>Fuori in AA.VV. Monday Blues (Edizioni GutenbergLab- 2013) – racconto breve</li>
              <li><a className='book-link' href='https://www.lapiccolavolante.net/libri/8-fuori-di-3-9788897785095.html' target='_blank' rel='noopener noreferrer'>Fuori di 3 (LaPiccolaVolante, 2015, Cagliari)- opera narrativa</a></li>
              <li>Tra le mura in AA.VV Il cerchio dele streghe (Morganti editore 2017, Udine)- racconto narrativo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Study
