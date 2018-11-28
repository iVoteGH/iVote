import React from "react";
import HOC from "./HOC";

const Main = props => {
  return (
    <div className="masthead text-center">
      <div id="main">
        {props.elections.map(election => (
          <div>
            <h1 className="font-effect-neon" key={election.name}>
              {election.name}
            </h1>
          </div>
        ))}
        <a class="btn btn-danger btn-lg" href="/info" role="button">
          Enter
        </a>
      </div>
    </div>
  );
};

export default HOC(Main);

// import { Link } from "react-router-dom";
// <Link to="/info">
// <div>
//   <h1 className="font-effect-neon" key={election.name}>
//     {election.name}
//   </h1>
// </div>
// </Link>
