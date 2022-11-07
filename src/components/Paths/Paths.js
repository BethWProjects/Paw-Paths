import React from "react";
import "./Paths.css";
import Card from "../Card/Card";

const Paths = ({ paths, searchedPath }) => {
  let pathCards;
  if (searchedPath !== "") {
    pathCards = paths.filter((path) =>
      path.type.toLowerCase().includes(searchedPath)
    );
  } else {
    pathCards = paths;
  }

  const pathData = pathCards.map((path) => {
    return (
      <Card
        img={path.image}
        title={path.title}
        type={path.type}
        key={path.id}
        id={path.id}
      />
    );
  });
  return <div className="paths-container">{pathData}</div>;
};

export default Paths;
