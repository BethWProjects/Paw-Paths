import React, { Component } from 'react'
import data from "../../sampleData";
import "./Details.css";

class Details extends Component {
  constructor() {
    super();
    this.state = { 
      path: null
     }
  }

  getPath = () =>  {
    const getId = Number(this.props.pathId)
    const currentPath = data.find(path => path.id === getId)
    this.setState({path: currentPath})
  }
  componentDidMount = () => {
    this.getPath()
  }

  render() { 
    return (
      <div>
        <img></img>
        
      </div> 
     );
  }
}
 
export default Details;
