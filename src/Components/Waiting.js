import React from "react";
import HOC from "./HOC";

const Waiting = props => {
  return (
    <div>
      <p>
        Thank you for selecting your candidate! Please checkout using MetaMask
      </p>
      <p>When you have finshed voting </p>
      <a
        onClick={props.sendSMS}
        className="btn btn-primary text-white"
        role="button"
        href="/results"
      >
        Click to View Results
      </a>
    </div>
  );
};

export default HOC(Waiting);
