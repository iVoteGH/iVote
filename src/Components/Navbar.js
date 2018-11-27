import React from "react";
import HOC from "./HOC";

const Navbar = props => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-danger text-white"
        id="navbar"
      >
        <a className="navbar-brand" href="/">
          Home<span className="sr-only">(current)</span>
        </a>
        <a className="navbar-brand" href="/info">
          Candidate Info
        </a>
        <a className="navbar-brand" href="/results">
          Results
        </a>
        {props.adminStatus ? (
          <a className="navbar-brand" href="/admin">
            Admin
          </a>
        ) : null}
      </nav>
    </div>
  );
};

export default HOC(Navbar);
