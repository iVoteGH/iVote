import React from "react";
import { Link } from "react-router-dom";
import HOC from "./HOC";

const Main = props => {
  return (
    //   <div>
    //   <br />
    //   <br />
    //   {props.elections.map(election => (
    //     <Link to="/info">
    //       <div className="election-container">
    //         <h1 key={election.name}>{election.name}</h1>
    //       </div>
    //     </Link>
    //   ))}
    // </div>

    <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="bg-light text-primary">Blockchain Voting dApp</h1>
            <hr />
          </div>
          <div className="col-lg-8 mx-auto">
            <h3 className="mb-5 bg-dark text-white">
              Make Democracy/Voter Turnout Great Again...Coming soon to a
              computer near you!
            </h3>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger"
              href="/info"
            >
              I'm interested!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HOC(Main);
