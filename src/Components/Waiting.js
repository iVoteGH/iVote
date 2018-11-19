import React from "react";
import { Link } from "react-router-dom";

const Waiting = props => {
  return (
    <div>
      <p>
        Thank you for selecting your candidate! Please checkout using Metamask
      </p>
      <p>
        When you have finshed voting{" "}
        <button type="button">
          <Link to="/vote">Click to View Results</Link>
        </button>
      </p>
    </div>
  );
};

export default Waiting;
