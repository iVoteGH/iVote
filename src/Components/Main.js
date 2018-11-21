import React from 'react';
import { Link } from 'react-router-dom';
import HOC from './HOC';

const Main = props => {
  console.log('state: ', props)
  return (
    <div>
      <h1>All Ballots</h1>
      {props.ballots.map((ballot, idx) => (
        <div onClick={
          () => {
              props.selectBallot(props[`singleBallot${idx+1}`])
              window.location.href = '/info'
            }
          }>
            <h1>{ballot}</h1>
          </div>


        // <Link to="/info" onClick={
        //   () => props.selectBallot(props[`singleBallot${idx+1}`])
        //   } >
        //   <div className="election-container">
        //     <h1>{ballot}</h1>
        //   </div>
        // </Link>
      ))}
    </div>
  );
};

export default HOC(Main);
