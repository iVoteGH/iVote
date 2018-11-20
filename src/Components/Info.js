import React from 'react';
import { Link } from 'react-router-dom';
import HOC from './HOC';

const Info = props => {
  return (
    <div>
      <h3>All Candidates</h3>
      <p>Explore news sources about each candidate</p>
      <div className="container">
        <div className="row justify-content-center">
          {props.candidates.map(candidate => (
            <div className="col-sm-4">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="card-title">{candidate[1]}</h3>
                <p className="card-title">
                  Current Vote Count: {candidate[2].toString()}
                </p>
                <div className="card-footer text-muted">Duel 1804</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a className="btn btn-primary btn-lg" role="button" href="/vote">
        {/* <Link to="/vote">Vote!</Link> */}
        Go to Ballot!
      </a>
    </div>
  );
};

export default HOC(Info);
