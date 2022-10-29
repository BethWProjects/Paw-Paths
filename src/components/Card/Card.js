import React from 'react'
import "./Card.css"

const Card = ({img, title, type}) => {
  return (
    <div className='card'>
      <img className='image' src={img} alt={`image of ${title}`} />
      <h1>{title}</h1>
      <h2>{type}</h2>
    </div>
  )
}

export default Card