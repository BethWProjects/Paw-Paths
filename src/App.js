import React, { Component } from "react";
import "./App.css";
import Paths from "./components/Paths/Paths";
import Details from "./components/Details/Details";
import data from "../src/sampleData";

class App extends Component {
  constructor() {
    super();
    this.state = { data };
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <header className="header">
          <h1>Paw Paths</h1>
        </header>
        <Paths paths={this.state.data} />
        <Details />
      </div>
    );
  }
}

export default App;
