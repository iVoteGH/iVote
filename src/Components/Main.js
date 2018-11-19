import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      elections: [
        {
          name: " Election of 1800"
        }
      ]
      //something which populates the number of elections
    };
  }

  render() {
    return (
      <div>
        <h1>All Elections</h1>
        {this.state.elections.map(election => (
          <Link to="/info">
            <div className="election-container">
              <h1 key={election.name}>{election.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Main;
