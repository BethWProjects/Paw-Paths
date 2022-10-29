import React from "react";
import "./Paths.css";
import Card from "../Card/Card";

const Paths = ({ paths }) => {
  const pathData = paths.map((path) => {
    return ( <Card img={path.image} title={path.title} type={path.type} /> )
  });
  return <div>{pathData}</div>;
};

export default Paths;
