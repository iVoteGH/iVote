import React from 'react';
import HOC from './HOC';

const Waiting = props => {
  return (
    <div>
      <br />
      <br />
      <h4>Thank you for selecting your candidate!</h4>
      <br />
      <h4>Please checkout using MetaMask.</h4>
      <img src="step6.gif" />
      <br />
      <h4>When you have finshed voting </h4>
      <br />
      <a
        onClick={props.sendSMS}
        className="btn btn-navy text-white"
        role="button"
        href="/results"
      >
        Click to View Results
      </a>
    </div>
  );
};

export default HOC(Waiting);
