import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { fetchAllPaths } from '../../api';
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

  componentDidMount = async () => {
     try { const pathList = await fetchAllPaths();
      const data = await pathList.json();
      const pathMatch = await data.find(path => path.id === Number(this.props.pathId));
      this.setState({ path: pathMatch, loading:false });
     } catch {
      this.setState({error: "Sorry, no paths available. Take a stroll around the block and try again!"});
     }
    }

  searchPath = (input) => {
    this.setState({ searchedPath: input });
  };

  render() { 
    const path = this.state.path;
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
};
 
export default Details;
