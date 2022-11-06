import React from "react";
import { Link } from "react-router-dom";
import "./CarouselCard.css";

const CarouselCard = ({ img, title, type, id }) => {
  return (
    <Link to={`/${id}`} className="carouselCard" aria-label={title} key={id}>
      <img className="carousel-image" src={img} alt={`image of ${title}`} />
      <h1 className="carousel-card-title">{title}</h1>
      <h2 className="carousel-card-type">{type}</h2>
    </Link>
  );
};

export default CarouselCard;
