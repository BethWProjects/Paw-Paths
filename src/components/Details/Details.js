import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import difficulty from "../../Images/difficulty.png"
import footprints from "../../Images/footprints.png"
import location from "../../Images/location.png"
import leash from "../../Images/leash.png"
import "./Details.css";

class Details extends Component {
  constructor() {
    super();
    this.state = { 
      path: {}
     }
  }

  getPath = () =>  {
    const getId =  Number(this.props.pathId)
    const currentPath =  this.props.paths.find(path => path.id === getId)
    this.setState({path: currentPath})
  }
  
  componentDidMount = () => {
    this.getPath()
  }

  render() { 
    const path = this.state.path
    return (
      <div className='path-details-container'>
        <img src={path.image} className='details-image hidden' alt={`image of ${path.title}`} />
        <div className='content-details-container'>
          <h2 className='title'> {path.title} </h2>
          <h3 className='location'><img src={location} className='icon' alt="Location Icon"/> Location - {path.location}</h3>
          <h3 className='path-details'> <img src={footprints} className='icon' alt="Distance Footprint Icon"/> Distance - {path.length} </h3>
          <h3 className='path-details'><img src={difficulty} className='icon' alt="Difficulty Spicy Pepper Icon"/> Difficulty - {path.difficulty}</h3>
          <h3 className='path-details'><img src={leash} className='icon' alt="Dog with Leash Required Icon"/> Leash required? - {path.leash}</h3>
          <h3 className="overview"> {path.overview} </h3>  
        <Link to={'/'}>
          <button className='details-home-btn'>Home</button>
        </Link>
        </div>
      </div> 
     );
  }
}
 
export default Details;
