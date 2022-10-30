import React, { Component } from "react";
import "./App.css";
import Paths from "./components/Paths/Paths";
import Details from "./components/Details/Details";
import RandomPaths from "./components/RandomPaths/RandomPaths";
import pathData from "./sampleData";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: pathData.data, 
      randomPaths: []
    };
  }

  randomFive = () => {
    const randomPathData = this.state.data.sort((a, b) => 0.5 - Math.random()).slice(0,5)
    console.log(randomPathData)
    this.setState=({randomPaths: randomPathData})
  }

  componentDidMount = () => {
    // this.randomFive()
  }
  render() {
    return (
      <div>
        <header className="header">
          <h1>Paw Paths</h1>
        </header>

        <Switch>
          <Route exact path='/' render={() =>  (<div>
            <RandomPaths randomFive={this.state}/> 
            <Paths paths={this.state.data}/>
          </div> 
          )
        } />
          <Route path='/:id' render={({ match }) => <Details pathId={match.params.id}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
