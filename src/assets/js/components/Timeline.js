import React from 'react'
import Events from './Events.js'

function Timeline(props) {
  return (
    <div className='timeline'>
      <Events
        timeline={{
          date: '1997',
          studyInfo: "Diploma di maturità magistrale conseguito presso l’Ist.Magistrale “G. Carducci” di Trieste, con la valutazione di 60/60"
        }}
      />
      <Events
        timeline={{
          date: '2002',
          studyInfo: "Laurea in Psicologia conseguita presso l’Università degli Studi di Trieste, con la valutazione di 100/110 (Tesi in psicologia dinamica progredita: “Un approccio psicoanalitico allo studio di un caso singolo di dissociazione mnesica”)."
        }}
      />
      <Events
        timeline={{
          date: '2004',
          studyInfo: "Esame di Stato per la qualifica di Psicologo ed iscrizione al relativo albo professionale (n.1213 Ordine Professionale degli Psicologi e degli Psicoterapeuti del Friuli Venezia Giulia)."
        }}
      />
      <Events
        timeline={{
          date: '2009',
          studyInfo: "Diploma di Counselor ad indirizzo psicosomatico, conseguito presso ANEB (Associazione Nazionale Ecobiopsicologia) di Milano."
        }}
      />
      <Events
        timeline={{
          date: '2016',
          studyInfo: "Acquisizione del titolo di “Facilitatore in Psicogenealogia e Costellazioni Familiari ad approccio Immaginale” (iscrizione Aiscon)."
        }}
      />
      <Events
        timeline={{
          date: '2016',
          studyInfo: "Conseguimento del titolo di ipnologo, tramite Master in Ipnosi Clinica presso APL- Associazione Psicologi Lombardia"
        }}
      />
    </div>
  )
}

export default Timeline
