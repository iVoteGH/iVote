import React from "react";
import { Link } from "react-router-dom";
import HOC from "./HOC";

const Main = props => {
  return (
    <div className="masthead text-center">
      <div id="main">
        {props.elections.map(election => (
          <div>
          <Link to="/info">
            <div>
                <h1 className="font-effect-neon" key={election.name}>
                  {election.name}
                </h1>
              </div>
            </Link>
            <Link to="/instructions">I<button>nstructions</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HOC(Main);
