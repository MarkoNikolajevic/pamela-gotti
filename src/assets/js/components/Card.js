import React from 'react'
import MediaQuery from 'react-responsive'

function Card(props) {
  return (
    <div className='card'>
      <MediaQuery  query='(min-width: 800px)'>
        <img src={props.card.image} alt={props.card.imgAlt}/>
      </MediaQuery>
      <h4 className='card-title'>{props.card.title}</h4>
      <p className='card-info'>
        {props.card.info}
        <a href={props.card.keepReading} className='card-link' target='_blank' rel='noopener noreferrer'>
          {props.card.linkText}
        </a>
      </p>
    </div>
  )
}

export default Card
