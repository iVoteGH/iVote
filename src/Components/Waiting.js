import React from "react";
import { Link } from "react-router-dom";
import HOC from "./HOC";

const Waiting = props => {
  return (
    <div>
      <p>
        Thank you for selecting your candidate! Please checkout using MetaMask
      </p>
      <p>
        When you have finshed voting{" "}
        <Link to="/results">Click to View Results</Link>
      </p>
    </div>
  );
};

export default HOC(Waiting);
