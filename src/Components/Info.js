import React from "react";
import { Link } from "react-router-dom";
import HOC from "./HOC";

const Info = props => {
  return (
    <div>
      <h1>All Candidates</h1>
      {props.candidates.map(candidate => (
        <div className="election-container">
          <h1>{candidate[1]}</h1>
        </div>
      ))}
      <Link to="/vote">Vote!</Link>
    </div>
  );
};

export default HOC(Info);
