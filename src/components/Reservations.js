import React from 'react';
import './Reservations.css';
import Card from './Card'

const Reservations = ({resys}) => {
  const resyCards = resys.map(res => {
    return (
      <Card
        
      />
    )
  })
}

export default Reservations;