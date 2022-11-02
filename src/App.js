import React, { Component } from "react";
import "./App.css";
import Paths from "./components/Paths/Paths";
import Details from "./components/Details/Details";
import Nav from "./components/Nav/Nav";
//import pathData from "./sampleData";
import { Route, Switch } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import { fetchAllPaths } from "./api";


class App extends Component {
  constructor() {
    super();
    this.state = { data: null };
  }
  componentDidMount = async () => {    
    console.log('fetch')
      try {
        const pathList = await fetchAllPaths();
        const data = await pathList.json();
        console.log(data)
        this.setState({ data: data });
      } catch {
        this.setState({
          error: "Error Getting Paths",
        });
        console.log(this.state.error);
      }
    };
  
  render() {
     if (!this.state.data) {
       return <h2 className="error-message">{this.state.error}</h2>;
     }
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' render={() => (
          <div>
            <Carousel />
            <Paths paths={this.state.data}/>
          </div> )
          } />
          <Route path='/:id' render={({ match }) => <Details pathId={match.params.id}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
