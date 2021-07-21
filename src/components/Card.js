import React from 'react';
import './Card.css'

const Card = ({name, date, time, number}) => {
  return (
    <div className='card'>
      <h3 className='card-name'>{name}</h3>
      <p className='card-date'>{date}</p>
      <p className='card-time'>{time} pm</p>
      <p className='card-number'>Number of guests: {number}</p>
    </div>
  )
}

export default Card;