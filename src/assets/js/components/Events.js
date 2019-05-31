import React from 'react'

function Events(props) {
  return (
    <div className='event' data-date={props.timeline.date}>
      <p className='event-info'>
        {props.timeline.studyInfo}
      </p>
    </div>
  )
}

export default Events
