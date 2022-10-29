import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

const Card = ({img, title, type, id}) => {
  return (
    <Link to={`/${id}`} className='card' aria-label={title}>
        <img className='image' src={img} alt={`image of ${title}`} />
        <h1>{title}</h1>
        <h2>{type}</h2>
    </Link>
  )
}

export default Card