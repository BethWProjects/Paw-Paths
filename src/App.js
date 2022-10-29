import React, { Component } from "react";
import "./App.css";
import Paths from "./components/Paths/Paths";
import Details from "./components/Details/Details";
import data from "../src/sampleData";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data };
  }
  render() {
    // console.log(match.params)

    return (
      <div>
        <header className="header">
          <h1>Paw Paths</h1>
        </header>
        <Switch>
          <Route exact path='/' render={() => <Paths paths={this.state.data}/>} />
          <Route path='/:id' render={({ match }) => <Details pathId={match.params.id}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
