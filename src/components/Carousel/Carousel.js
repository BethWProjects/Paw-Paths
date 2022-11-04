import React from "react";
import "./Carousel";
import Card from "../Card/Card";
// import pathData from "../../sampleData";
import './Carousel.css'
import { fetchAllPaths } from "../../api";


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: null,
      randomFive: null,
    };
  }
  componentDidMount = async () => {
    try {
      const pathList = await fetchAllPaths();
      const newData = await pathList.json();
      console.log(newData)
     this.setState({ newData: newData });     
     this.setFiveRandom(newData)
    } catch {
      this.setState({
        error: "Error Getting Paths",
      });
      //console.log(this.state.error);
    }
  };
  setFiveRandom = (data) => {
    console.log('hey')
    const randomPathData = data
      .sort((a, b) => 0.5 - Math.random())
      .slice(0, 5);
      console.log(randomPathData)
    this.setState({ randomFive: randomPathData });   
  }
  //   const randomPathData = this.state.data
  //     .sort((a, b) => 0.5 - Math.random())
  //     .slice(0, 5);
  //   this.setState({ randomFive: randomPathData });
  //   this.displayCard();
  // };

  // displayCard = () => {
  //   const five = this.state.randomFive;
  // };

  render() {
    let content;    
     console.log(this.state.newData);     
    // this.displayCard();
    console.log(this.state.randomFive);
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
      <h2 className="featured-hikes">Featured Hikes & Parks</h2>
      <div className="carousel-container">{content}</div>
      </div>
  }
}
export default Carousel;
