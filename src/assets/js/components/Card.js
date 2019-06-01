import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img className='card-img' src={props.card.image} alt={props.card.imgAlt}/>
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
