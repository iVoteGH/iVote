import React from 'react';
import { Link } from 'react-router-dom';
import HOC from './HOC';

const Main = props => {
  return (
    <div>
      <h1>All Duels</h1>
      {props.elections.map(election => (
        <Link to="/info">
          <div className="election-container">
            <h1 key={election.name}>{election.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HOC(Main);
