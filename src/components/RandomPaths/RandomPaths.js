import React, {Component} from "react";
import Card from "../Card/Card";
import './RandomPaths.css';

const RandomPaths = ({ paths }) => {
    console.log(paths)
    const randomPathData = paths.sort((a, b) => 0.5 - Math.random())
    const topFivePaths = randomPathData.slice(0,5)
    console.log(topFivePaths)
    const randomData = topFivePaths.map((path) => {
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
    console.log(paths.length)
    return <div className="randomizer-container">{randomData}</div>;
  };

export default RandomPaths;

