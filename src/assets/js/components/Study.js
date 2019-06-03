import React from 'react'
import Timeline from './Timeline.js'

function Study() {
  return (
    <section id='study'>
      <div className='container'>
        <h3 className='section-title'>Percorso formativo</h3>
        <Timeline />
        <div className='pubblications'>
          <h3 className='section-title'>Pubblicazioni</h3>
          <ul className='pubblications-list'>
            <li>Clarici A., Gotti P., Travan L. & Bava A. (2002) A single case study of anterograde amnesia due to a right-hemisphere lesion presented from a depth neuropsycology perspective. Forum 2002 of European of Neuroscience Parigi 12-18 luglio 2002 (abstract)</li>
            <li>L'attesa (LaPiccolaVolante, 2013, Cagliari) – opera di narrativa</li>
            <li>Fuori in AA.VV. Monday Blues (Edizioni GutenbergLab- 2013) – racconto breve</li>
            <li>Fuori di 3 (LaPiccolaVolante, 2015, Cagliari)- opera narrativa</li>
            <li>Tra le mura in AA.VV Il cerchio dele streghe (Morganti editore 2017, Udine)- racconto narrativo</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Study
