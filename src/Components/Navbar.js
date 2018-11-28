import React from 'react';
import HOC from './HOC';

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
        &nbsp;&nbsp;&nbsp;
        <a className="navbar-brand" href="/instructions">
          Instructions
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="navbar-brand" href="/blockchain">
          Blockchain
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="navbar-brand" href="/info">
          Candidates
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="navbar-brand" href="/results">
          Results
        </a>
        &nbsp;&nbsp;&nbsp;
        {props.adminStatus ? (
          <a className="navbar-brand" href="/admin">
            Admin
          </a>
        ) : null}
      </nav>
      <img src="Header.png" />
    </div>
  );
};

export default HOC(Navbar);
