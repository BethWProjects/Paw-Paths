import React, {Component} from "react";
import Carousel from "../Carousel/Carousel";
// import pathData from '../../sampleData';
// import Card from "../Card/Card";
import './RandomPaths.css';

class RandomPaths extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomFiveCards: null
        }
    }
    handleRandom = () => {
        this.props.randomFive(this.state.randomFiveCards)
    }

  displayRandomCards = () => {
    console.log(this.props)
    // const randomData = this.state.randomFiveCards.map((path) => {
    //     return ( 
    //       // <div>
    //           <Carousel
    //           img={path.image} 
    //           title={path.title} 
    //           type={path.type} 
    //           key={path.id} 
    //           id={path.id} 
    //           /> 
    //       //  </div>
    //       )
    //   });
  }
   

render() {
    return(
        <div className="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
            {this.handleRandom()}
        </div>
    )
    }
 };

export default RandomPaths;

