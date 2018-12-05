import React from 'react';
import { Link } from 'react-router-dom';

const InstructionsPage = () => {
  return (
    <div>
      <div>
        <br />
        <br />
        <h2>When you're ready to start the Voting Process...</h2>
        <Link to="/info">
          <button type="button" className="btn btn-navy btn-lg text-white">
            <strong>🇺🇸 Click Here to Meet the Candidates🇺🇸</strong>
          </button>
        </Link>
        <br />
        <br />
        <br />

        <div className="container-fluid">
          <div className="card-group">
            <div
              className="card text-white bg-secondary"
              style={{
                width: 22 + 'rem',
                height: 25 + 'rem',
                margin: 2.5 + 'px',
              }}
            >
              <h3>
                <strong>STEP 1</strong>
              </h3>
              <div className="card-text">
                <h4>
                  Log into your MetaMask account in order to access your
                  Ethereum blockchain wallet
                </h4>
              </div>
              <img
                src="step1.gif"
                height="250px"
                width="150px"
                className="center"
              />
            </div>
            <div
              className="card text-white bg-secondary"
              style={{
                width: 22 + 'rem',
                height: 25 + 'rem',
                margin: 2.5 + 'px',
              }}
            >
              <h3>
                <strong>STEP 2</strong>
              </h3>
              <div className="card-text">
                <h4>
                  After navigating to the candidates page... click on each
                  candidate to learn more about their voting record and recent
                  press
                </h4>
              </div>
              <img
                src="step3.gif"
                height="250px"
                width="300px"
                className="center"
              />
            </div>
          </div>

          <div className="card-group">
            <div
              className="card text-white bg-secondary"
              style={{
                width: 22 + 'rem',
                height: 25 + 'rem',
                margin: 2.5 + 'px',
              }}
            >
              <h3>
                <strong>STEP 3</strong>
              </h3>
              <div className="card-text">
                <h4>When you are ready to vote, click the button</h4>
              </div>
              <img src="step4.gif" className="center" width="300px" />
            </div>
            <div
              className="card text-white bg-secondary"
              style={{
                width: 22 + 'rem',
                height: 25 + 'rem',
                margin: 2.5 + 'px',
              }}
            >
              <h3>
                <strong>STEP 4</strong>
              </h3>
              <div className="card-text">
                <h4>
                  On the ballot page... first select the candidate and then
                  click the "Vote For" button
                </h4>
              </div>
              <img src="step5.gif" className="center" width="300px" />
            </div>
          </div>
          <div className="card-group">
            <div
              className="card text-white bg-secondary"
              style={{
                width: 22 + 'rem',
                height: 25 + 'rem',
                margin: 2.5 + 'px',
              }}
            >
              <h3>
                <strong>STEP 5</strong>
              </h3>
              <h4>
                Don't forget to submit your vote with MetaMask! Make sure you
                click <span className="text-success">SUBMIT</span> on the pop-up
                to have your vote recorded
              </h4>
              <img
                src="step6.gif"
                height="250px"
                width="150px"
                className="center"
              />
            </div>
            <div
              className="card text-white bg-secondary"
              style={{
                width: 22 + 'rem',
                height: 25 + 'rem',
                margin: 2.5 + 'px',
              }}
            >
              <h3>
                <strong>STEP 6</strong>
              </h3>
              <div className="card-text">
                <h4>
                  Click and navigate to the results page to see the most recent
                  results!
                </h4>
              </div>
              <img src="results.gif" className="center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
