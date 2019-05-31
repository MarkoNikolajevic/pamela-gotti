import React from 'react'
import Card from './Card.js'
import disturbi from '../../img/disturbi.svg'
import gravidanza from '../../img/gravidanza.svg'
import ipnosi from '../../img/ipnosi.svg'
import psicosomatica from '../../img/psicosomatica.svg'

function Therapy() {
  return (
    <section id='therapy'>
      <div className='container'>
        <h3 className='section-title'>Di cosa mi occupo</h3>
        <div className='divider'></div>
        <Card
          card={{
            image: psicosomatica,
            imgAlt: 'Psicosomatica e complessità',
            title: 'Psicosomatica e complessità',
            info: "Ognuno ha la sua storia. Qualcuno ci ha detto che l'abbiamo ereditata dai nostri genitori, nonni e avi. Altri ci dicono che dipende dalla nostra volontà, dal nostro pensiero. Altri ancora sostengono che dipenda dal caso e naturalmente qualcun altro ritiene al contrario che sia tutto scritto nel nostro destino o dal nostro karma.",
            keepReading: '#',
            linkText: 'Continua a leggere'
          }}
        />
        <Card
          card={{
            image: ipnosi,
            imgAlt: 'Ipnosi',
            title: 'Ipnosi',
            info: "Le opinioni che molte persone hanno sull’ipnosi si basano su convinzioni e luoghi comuni appresi dai romanzi, dai film, dagli spettacoli televisivi e dalle proprie stesse fantasie. Alcuni ne sono addirittura spaventati, pensando che si tratti di un’esperienza di perdita di controllo, in cui ci si trova succubi e alla mercé dell’ipnotizzatore.",
            keepReading: '#',
            linkText: 'Continua a leggere'
          }}
        />
        <Card
          card={{
            image: gravidanza,
            imgAlt: 'Gravidanza',
            title: 'Preparazione al parto',
            info: "Training di preparazione al parto mediante induzione ipnotica. Una donna che si prepara a partorire porta con sé credenze e convinzioni di vario tipo, caricate emotivamente da ansie anticipatorie e da una certa confusione rispetto a ciò che dovrà effettivamente accadere.",
            keepReading: '#',
            linkText: 'Continua a leggere'
          }}
        />
        <Card
          card={{
            image: disturbi,
            imgAlt: 'Disturbi trattati',
            title: 'Disturbu trattati',
            info: "- Depressione - Ansia - Attacchi di panico - Disturbi alimentari - Disturbi sessuali - Dipendenze",
          }}
        />
      </div>
    </section>
  )
}

export default Therapy
