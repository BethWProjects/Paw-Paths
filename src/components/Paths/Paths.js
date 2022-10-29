import React from "react";
import "./Paths.css";
import Card from "../Card/Card";

const Paths = ({ paths }) => {
  const pathData = paths.map((path) => {
    return ( 
      <Card 
        img={path.image} 
        title={path.title} 
        type={path.type} 
        key={path.id} 
        id={path.id} 
        /> 
      )
  });
  return <div className="paths-container">{pathData}</div>;
};

export default Paths;
