import React from 'react'
import profilePic from '../../img/profile-pic.jpg'

function AboutMe() {
  return (
    <section id='about'>
      <div className='container'>
        <img src={profilePic} alt='Pamela Gotti' className='profile-pic' />
        <p className='personal-desc'>
        Mi chiamo Pamela Gotti, sono nata e vivo a Trieste.

        Il mio percorso è iniziato dall'ascolto e l'osservazione di me stessa, degli altri
        e delle relazioni che intercorrono nei diversi sistemi umani.

        Ho approfondito tali conoscenze laureandomi in Psicologia nel 2002 presso
        l’Università di Trieste e formandomi successivamente in Psicosomatica all'istituto
        ANEB di Milano (Ass. Nazionale EcoBiopsicologia).

        Dal 2009 sono iscritta all'albo degli Psicologi del Friuli Venezia Giulia (n.1213).
        Nel 2016 ho svolto un Master in Ipnosi Clinica presso APL a Milano e nello stesso
        anno ho conseguito il titolo di “Facilitatore in Psicogenealogia e Costellazioni
        Familiari ad approccio Immaginale” (iscrizione Aiscon). Ho svolto alcuni percorsi
        di analisi personale (in particolare attraverso la Psicosintesi e la Spagyria)
        che si sono rivelati utili anche a livello professionale. Da molti anni inoltre mi
        interesso di Floriterapia (Fiori di Bach e Californiani) che utilizzo molto spesso
        per coaudiuvare il processo terapeutico.

        Il mio percorso di autoconoscenza, miglioramento e formazione è tuttora in corso e
        viaggia in parallelo con la mia pratica clinica. Il lavoro che svolgo come
        insegnante nella scuola primaria a partire dal 2001 ha affinato le mie modalità di
        relazione e l'ascolto empatico che è alla base del mio stile personale e professionale.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
