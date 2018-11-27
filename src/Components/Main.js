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

    // <header class="masthead text-center text-white d-flex">
    //   <div class="container my-auto">
    //     <div class="row">
    //       <div class="col-lg-10 mx-auto">
    //         <h1 class="bg-light text-primary">
    //           <strong>Blockchain Voting dApp</strong>
    //         </h1>
    //         <hr />
    //       <div class="col-lg-8 mx-auto">
    //         <h3 class="mb-5 bg-dark text-white">
    //           Make Democracy/Voter Turnout Great Again...Coming soon to a
    //           computer near you!
    //         </h3>
    //         <a class="btn btn-primary btn-xl js-scroll-trigger" href="#tech">
    //           I'm interested!
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </header>

    <header class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="bg-light text-primary">
              <strong>Blockchain Voting dApp</strong>
            </h1>
            <hr />
          </div>
          <div class="col-lg-8 mx-auto">
            <h3 class="mb-5 bg-dark text-white">
              Make Democracy/Voter Turnout Great Again...Coming soon to a
              computer near you!
            </h3>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#tech">
              I'm interested!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HOC(Main);
