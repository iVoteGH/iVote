import React from 'react';
import HOC from './HOC';

const Waiting = props => {
  return (
    <div>
      <br />
      <h4>Thank you for selecting your candidate!</h4>
      <h4>
        Please <span className="text-danger">confirm your vote</span> using
        MetaMask.
      </h4>
      <br />
      <h4>
        <strong>STEP 1:</strong> On the MetaMask confirmation window{' '}
        <span className="text-danger">please click confirm.</span>
      </h4>
      <h5>If a MetaMask confirmation window does not automatically appear</h5>
      <h5>
        please click on the fox icon <img src="metamask.png" height="25px" /> in
        your Chrome Extensions bar.
      </h5>
      <br />
      <div>
      </div>
      <br />
      <h4>
        <strong>STEP 2:</strong> After you have submitted your vote using
        MetaMask view the results.
      </h4>
      <br />
      <a
        onClick={props.sendSMS}
        className="btn btn-navy btn-lg text-white"
        role="button"
        href="/results"
      >
        <strong>Click to View Results</strong>
      </a>
    </div>
  );
};

export default HOC(Waiting);
