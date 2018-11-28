import React from 'react';
import HOC from './HOC';
import { Link } from 'react-router-dom';

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
            <Link to="/instructions">
              <button type="button" className="btn btn-danger btn-lg">
                Instructions on How to Vote
              </button>
            </Link>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HOC(Main);
