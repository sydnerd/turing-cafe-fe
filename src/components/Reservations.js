import React from 'react';
import './Reservations.css';
import Card from './Card'

const Reservations = ({resys}) => {
  const resyCards = resys.map(res => {
    return (
      <Card
        name = {res.name}
        date = {res.date}
        time = {res.time}
        number = {res.number}
      />
    )
  })

  return (
    <div className = 'res-container'>
      {resyCards}
    </div>
  )
}

export default Reservations;