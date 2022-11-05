import React, { Component, Fragment } from "react";
import "./App.css";
import Paths from "./components/Paths/Paths";
import Details from "./components/Details/Details";
import Nav from "./components/Nav/Nav";
import { Route, Switch } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import { fetchAllPaths } from "./api";
import Search from "./components/Search/Search";


class App extends Component {
  constructor() {
    super();
    this.state = { data: null, searchedPath: "" };
  }
  componentDidMount = async () => {
    try {
      const pathList = await fetchAllPaths();
      const data = await pathList.json();
      this.setState({ data: data });
    } catch {
      this.setState({
      error: "Sorry, no paths available. Take a stroll around the block and try again!",
      });
    }
  };
  searchPath = (input) => {
    this.setState({ searchedPath: input });
  };
  render() {
    // const errorMessage =!this.state.data && (
    //           <h2 className="error-message">{this.state.error}</h2>
    //         )
            
    return (
      <div>
        <Nav />
        <Switch>          
            {!this.state.data && (
              <h2 className="error-message">{this.state.error}</h2>
            )}
            ;
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Carousel />
                  <Search searchPath={this.searchPath} />
                  <Paths
                    paths={this.state.data}
                    searchedPath={this.state.searchedPath}
                  />
                </div>
              )}
            />
            <Route
              path="/:id"
              render={({ match }) => <Details pathId={match.params.id} />}
            />          
        </Switch>
      </div>
    );
  }
}

export default App;
