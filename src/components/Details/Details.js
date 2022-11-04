import React, { Component } from 'react'
import pathData from '../../sampleData';
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
    console.log(getId)
    const currentPath =  pathData.data.find(path => path.id === getId)
    console.log(currentPath)
    this.setState({path: currentPath})
  }
  
  componentDidMount = () => {
    this.getPath()
  }

  render() { 
    const path = this.state.path
    return (
      <div className='path-details-container'>
        <img src={path.image} className='details-image' />
        <div className='content-details-container'>
          <h2 className='title'> {path.title} </h2>
          <h3 className='location'><img src={location} className='icon'/> Location - {path.location}</h3>
          <h3 className='path-details'> <img src={footprints} className='icon'/> Distance - {path.length} </h3>
          <h3 className='path-details'><img src={difficulty} className='icon'/> Difficulty - {path.difficulty}</h3>
          <h3 className='path-details'><img src={leash} className='icon'/> Leash required? - {path.leash}</h3>
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
