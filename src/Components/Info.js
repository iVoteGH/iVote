import React from "react";
import { Link } from "react-router-dom";

const Info = props => {
  console.log("candidates infoooo", this.state);
  return (
    <div>
      <h1>All Candidates</h1>
      {this.state.elections.map(election => (
        <Link to="/vote">
          <div className="election-container">
            <h1 key={election.name}>{election.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Info;
