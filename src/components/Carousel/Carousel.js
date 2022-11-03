import React, { Component } from "react";
import "./Carousel";
import Card from "../Card/Card";
//import Display from "./Display";
import pathData from "../../sampleData";
import './Carousel.css'


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: pathData.data,
      randomFive: null,
    };
  }
  componentDidMount = () => {
    const randomPathData = this.state.data
      .sort((a, b) => 0.5 - Math.random())
      .slice(0, 5);
    this.setState({ randomFive: randomPathData });
    this.displayCard();
  };
  displayCard = () => {
    const five = this.state.randomFive;
  };
  render() {
    let content;
    this.displayCard();
    //console.log(this.state.randomFive);
    this.state.randomFive &&
      (content = this.state.randomFive.map((path) => {
        return (
          <Card
            img={path.image}
            title={path.title}
            type={path.type}
            key={path.id}
            id={path.id}
          />
        );
      }));
    return <div>
      <h2 className="featured-hikes">Featured Hikes</h2>
      <div className="carousel-container">{content}</div>;
      </div>
  }

}
export default Carousel;
