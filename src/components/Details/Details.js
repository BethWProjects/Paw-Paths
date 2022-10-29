import React, { Component } from 'react'
import pathData from '../../sampleData';
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
      <div>
        <img src={path.image} />
        <h2 className='title'> {path.title} </h2>
        <h3 className='location'> Location: {path.location}</h3>
        <h3 className='path-details'> Distance: {path.length} | Difficulty: {path.difficulty} | Leashes Required: {path.leash} </h3>
        <h3 className="overview"> {path.overview} </h3>  
      </div> 
     );
  }
}
 
export default Details;
