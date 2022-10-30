import React from 'react'
import { Link } from 'react-router-dom'
import "./Carousel.css"

const Carousel = ({img, title, type, id}) => {
  return (
    <Link to={`/${id}`} className='carousel-card' aria-label={title}>
        <div className="gallery-cell">
            <img className='carousel-image' src={img} alt={`image of ${title}`} />
            <h1>{title}</h1>
            <h2>{type}</h2>
        </div>
    </Link>
  )
}

export default Carousel;