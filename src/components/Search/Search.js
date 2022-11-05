import React, { Component } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedPaths: [],
      hike: null,
    };
  }
  render() {
    return (
      <div className="btn-container">
        <button
          onClick={() => {
            this.props.searchPath("hike");
          }}
        >
          Hikes
        </button>
        <button
          onClick={() => {
            this.props.searchPath("park");
          }}
        >
          Parks
        </button>
        <Link
          to={`/`}
          onClick={() => {
            this.props.searchPath("");
          }}
        >
          <button>Clear</button>
        </Link>
      </div>
    );
  }
}

export default Search;
