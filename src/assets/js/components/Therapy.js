import React from 'react'
import Card from './Card.js'
import disturbi from '../../img/disturbi.svg'
import gravidanza from '../../img/gravidanza.svg'
import ipnosi from '../../img/ipnosi.svg'
import psicosomatica from '../../img/psicosomatica.svg'
import ScrollAnimation from 'react-animate-on-scroll'

function Therapy() {
  return (
    <section id='therapy'>
      <div className='container'>
        <h3 className='section-title'>Di cosa mi occupo</h3>
        <div className='divider'></div>
        <div className='card-wrapper'>
          <ScrollAnimation
            animateIn='slideInLeft'
            animateOnce={true}>
            <Card
              card={{
                image: psicosomatica,
                imgAlt: 'Psicosomatica e complessità',
                title: 'Psicosomatica e complessità',
                info: "Ognuno ha la sua storia. Qualcuno ci ha detto che l'abbiamo ereditata dai nostri genitori, nonni e avi. Altri ci dicono che dipende dalla nostra volontà, dal nostro pensiero. Altri ancora sostengono che dipenda dal caso e naturalmente qualcun altro ritiene al contrario che sia tutto scritto nel nostro destino o dal nostro karma.",
                readMore: 'Continua a leggere',
                article: `Ognuno ha la sua storia. Qualcuno ci ha detto che l'abbiamo ereditata dai nostri genitori, nonni e avi. Altri ci dicono che dipende dalla nostra volontà, dal nostro pensiero. Altri ancora sostengono che dipenda dal caso e naturalmente qualcun altro ritiene al contrario che sia tutto scritto nel nostro destino o dal nostro karma.
                          Probabilmente, ciascuna di queste considerazioni risponde a verità, ma nessuna di queste può ritenersi esaustiva e valere in ogni caso.
                          La complessità della Vita non riesce ad essere imbrigliata in una sola teoria o in un solo punto di vista. Se ci fermiamo a guardare al centro delle cose potremmo osservare quanto la realtà sia un gioco di scatole cinesi, che si compenetrano e si fondono l'una con l'altra.
                          Ogni individuo non è altro che un microcosmo ultracomplesso inserito in un sistema altrettanto variegato. Chiaramente, tale complessità, lungi dall'essere un labirinto in cui perdersi, può costituire una splendida opportunità per ritrovarsi.
                          Lo stesso corpo che abitiamo va considerato come un tempio attraverso il quale entrare in relazione con noi stessi. La nostra cultura occidentale, l'evoluzione che ha avuto la scienza e la medicina, tendono ad allontanarci da un approccio di questo tipo, riportando ogni manifestazione la nostra struttura corporea ci invii come una mera "meccanica" materialistica. Eppure tutti noi, prima o poi abbiamo avuto la sensazione che non si tratti solo di questo, che la realtà delle cose sia celata da apparenze superficiali che depistano la nostra attenzione e la nostra indagine.
                          In questo scenario si colloca il "nuovo" approccio psicosomatico (in realtà, la tradizione ci ricorda che tali conoscenze erano molto più ovvie e scontate fino a pochi secoli fa) a cui anche l'attuale medicina convenzionale sta aprendosi a poco a poco.
                          Questo modello, in ogni caso, continua a rimanere su un piano corporeo, comprendendo all'interno di esso ciò che ne fa naturalmente parte, ovvero il sistema nervoso centrale e autonomo.
                          Questo allargamento di vedute, pur essendo un notevole passo avanti a livello scientifico e accademico, non può ancora soddisfare chi si è reso conto che ciò che concerne le proprie emozioni, i propri meccanismi psichici più profondi e le proprie attitudini, non può essere spiegato unicamente come una concatenazione di risposte fisiologiche agli stimoli.
                          Quindi la terapia psicosomatica che voglia tenere conto della complessità dell'individuo e dei suoi contenuti inconsci slegati dal semplice materialismo meccanicista, ha degli obiettivi che si collocano su altri versanti.
                          Innanzitutto, si prefigge di porre l'attenzione sul malato piuttosto che sulla malattia, contestualizzandola in un quadro più ampio.
                          Ad esempio, si deve tenere conto di come il paziente comunichi al terapeuta il sintomo e come lo collochi all'interno della propria storia personale.
                          Molto spesso le persone riferiscono il problema fisico di cui soffrono usando gli aggettivi possessivi: la mia emicrania, la mia gastrite, il mio scompenso cardiaco... come se fosse del tutto annesso alla propria persona. Ciò dovrebbe renderci chiaro quanto la costruzione del sintomo abbia richiesto anni e anni di faticoso lavoro... Questo atteggiamento è frequente soprattutto in pazienti con patologie croniche.
                          In altri casi, invece, un nuovo orizzonte esistenziale, magari improvviso e non previsto (un lutto, una separazione, una nascita, un trasferimento...), potrebbe non essere ben accetto dall'interessato e costituire un'occasione per sviluppare un sintomo nuovo, magari acuto e incomprensibile oppure risvegliarne uno ormai considerato risolto...
                          Tutto ciò avviene soprattutto nel caso non ci sia un autentico riconoscimento del proprio vissuto, una relativa elaborazione mentale e un graduale superamento della sofferenza. In molti casi tale "oscuramento emotivo" è la causa principale dell'insorgere del sintomo ed è proprio su questo che deve intervenire la terapia.
                          Ma ancora non è sufficiente. Lo sarebbe se la persona in questione vivesse su un'isola deserta e avesse da confrontarsi solo con sé stesso e, chissà, forse non basterebbe nemmeno in questo caso, visto che ognuno di noi porta dentro di sé una tale massa di persone interiorizzate, da costituire una folla.
                          La terapia psicosomatica basata sulla complessità, non può non tenere conto del mondo che circonda l'individuo, a partire dalla sua famiglia, dalla sua rete relazionale, estendendosi alla società in cui si trova a vivere, fino ad affondare le radici in quell'inconscio collettivo di cui tutti facciamo parte, e che tutti insieme costituiamo, e che così spesso si manifesta in forme oscure e incomprensibili.
                          Hillman, noto psicanalista, allievo di C.G.Jung, sosteneva che è necessario entrare in contatto con la "inconscietà del mondo", altrimenti risulta impossibile relazionarsi veramente con un'altra persona.
                          In questo senso si collocano il lavoro con gli archetipi e tutte le varie forme di terapia immaginale. È attraverso le immagini che l'inconscio può comunicare con la coscienza ed è sempre attraverso le immagini che il terapeuta e il paziente possono trovare uno spazio comune di relazione, in cui possono comunicare bypassando l'ambiguità delle parole, o meglio integrando queste ultime con significati più completi.`
              }}
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInRight'
            animateOnce={true}>
            <Card
              card={{
                image: ipnosi,
                imgAlt: 'Ipnosi',
                title: 'Ipnosi',
                info: "Le opinioni che molte persone hanno sull’ipnosi si basano su convinzioni e luoghi comuni appresi dai romanzi, dai film, dagli spettacoli televisivi e dalle proprie stesse fantasie. Alcuni ne sono addirittura spaventati, pensando che si tratti di un’esperienza di perdita di controllo, in cui ci si trova succubi e alla mercé dell’ipnotizzatore.",
                readMore: 'Continua a leggere',
                article: `Le opinioni che molte persone hanno sull’ipnosi si basano su convinzioni e luoghi comuni appresi dai romanzi, dai film, dagli spettacoli televisivi e dalle proprie stesse fantasie. Alcuni ne sono addirittura spaventati, pensando che si tratti di un’esperienza di perdita di controllo, in cui ci si trova succubi e alla mercé dell’ipnotizzatore. Altri pensano che sia uno stato “magico” in cui è possibile modificare la propria personalità per compiere azioni che mai metteremmo in opera normalmente.
                          Qualcun altro potrebbe pensare che si tratti né più né meno che di un particolare stato di sonno, indotto da un’altra persona. Tutte queste idee riguardo l’esperienza ipnotica contengono delle imprecisioni.
                          Eppure si tratta di un’esperienza che tutti quanti noi abbiamo sperimentato almeno una volta nella vita, magari senza neppure rendercene conto. Ogni volta che compiamo delle azioni con estrema focalizzazione, ignorando tutto ciò che ci circonda, siamo in uno stato di ipnosi. Si pensi a un atleta prima e durante una gara importante, o un musicista che si prepara per un concerto. Si è in uno stato d’ipnosi in seguito ad un evento traumatico che sollecita tutte le nostre capacità di reazione e ci porta a compiere azioni con estrema efficienza e in breve tempo.
                          Oppure, più semplicemente, siamo in uno stato di ipnosi quando siamo immersi nella totale presenza che ci permette di esplorare ogni dettaglio di ciò che stiamo esperendo o viceversa quando stiamo svolgendo un compito meccanico e ripetitivo, come ad esempio guidare la macchina su di un tratto conosciuto e ci troviamo alla meta senza esserci resi conto di aver compiuto il percorso.
                          Effettivamente l’ipnosi è uno stato modificato di coscienza in cui la persona può manifestare abilità e fenomeni molto diversi rispetto a quelli che normalmente sperimenta. In questo senso, si tratta di un’occasione per contattare parti di sé che altrimenti resterebbero precluse.
                          L’ipnosi non modifica il modo di essere della persona, né altera i suoi ricordi, ma le permette di imparare di più su sé stessa e di esprimersi più adeguatamente.
                          In ambito clinico, l’uso dell’ipnosi è estremamente utile, perché rende il percorso terapeutico più profondo, alimentando la motivazione e una maggiore presa di coscienza dei contenuti emersi.
                          Tramite la trance ipnotica, è possibile intervenire efficacemente sulle dipendenze (fumo, alcol,…), sugli stati ansiosi e le fobie, sui problemi della sfera sessuale, sulle situazioni di dolore e patologie croniche e si può compiere un training specifico per prepararsi al parto.
                          In tutti i questi casi, il lavoro svolto con il terapeuta può essere continuato e riproposto in autonomia dal paziente in caso di necessità, grazie all’autoipnosi.`
              }}
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInLeft'
            animateOnce={true}>
            <Card
              card={{
                image: gravidanza,
                imgAlt: 'Gravidanza',
                title: 'Preparazione al parto',
                info: "Training di preparazione al parto mediante induzione ipnotica. Una donna che si prepara a partorire porta con sé credenze e convinzioni di vario tipo, caricate emotivamente da ansie anticipatorie e da una certa confusione rispetto a ciò che dovrà effettivamente accadere.",
                readMore: 'Continua a leggere',
                article: `Training di preparazione al parto mediante induzione ipnotica.
                          Una donna che si prepara a partorire porta con sé credenze e convinzioni di vario tipo, caricate emotivamente da ansie anticipatorie e da una certa confusione rispetto a ciò che dovrà effettivamente accadere.
                          Eppure ogni donna possiede le risorse necessarie per affrontare questo momento così delicato e magico.
                          Il training di preparazione al parto tramite l'ipnosi permette di far emergere quella capacità femminile innata di saper partorire, assecondando le richieste del corpo, per assicurare un adeguato accompagnamento al bambino che sta per nascere.
                          La donna viene invitata a confrontarsi con le sue sensazioni, con la sua idea del parto, liberando la mente da sovrastrutture limitanti, garantendo il meglio a se stessa per confrontarsi con un dolore fisiologico, quindi sopportabile e finalizzato.
                          La futura madre viene resa consapevole e partecipe delle diverse fasi del parto e grazie al rilassamento profondo può attingere alle sue conoscenze innate, per trovarsi pronta ad affrontare gli eventi nel momento in cui si presenteranno al termine della gravidanza.
                          Tutto ciò porta a una migliore condizione psicologia anche in seguito al parto, prevenendo malinconie e depressioni.
                          Come si svolge il percorso? 
                          8 sedute a cadenza settimanale a partire dalla 30-31 settimana di gravidanza;
                          ad ogni seduta, tramite l'induzione ipnotica viene simulata, via via in modo sempre più interiorizzato, l'esperienza del parto, apprendendo a gestire il dolore e ad accogliere nel migliore dei modi il proprio bambino;
                          le sedute vengono registrate in modo da "allenarsi" in autonomia tra uno step e l'altro;
                          possibilità di effettuare le sedute nel proprio domicilio;
                          la prima seduta è informativa e gratuita.`
              }}
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInRight'
            animateOnce={true}>
            <Card
              card={{
                image: disturbi,
                imgAlt: 'Disturbi trattati',
                title: 'Disturbi trattati',
                info: `Depressione
                    Ansia
                    Attacchi di panico
                    Disturbi alimentari
                    Disturbi sessuali
                    Dipendenze`,
                infoId: 'center-text',
                btnId: 'hidden'
              }}
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Therapy
