import React from 'react';
import HOC from './HOC';

const Navbar = props => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-danger text-white"
        id="navbar"
      >
        <li className="nav-item active">
          <a className="navbar-brand active" href="/">
            Home<span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="navbar-brand active" href="/info">
            Candidates
          </a>
        </li>
        <li className="nav-item active">
          <a className="navbar-brand active" href="/results">
            Results
          </a>
        </li>
        {props.adminStatus ? (
          <a className="navbar-brand active" href="/admin">
            Admin
          </a>
        ) : null}
      </nav>
      <img src="Header.png" />
    </div>
  );
};

export default HOC(Navbar);
