import React from 'react';
import HOC from './HOC';

const Waiting = props => {
  return (
    <div>
      <br />
      <h4>Thank you for selecting your candidate!</h4>
      <h4>
        Please <span className="text-danger">submit your vote</span> using
        MetaMask. <img src="metamask.png" height="25px" />
      </h4>
      <div>
        <table className="table table-borderless">
          <tr>
            <td>
              <h4>
                <strong>Step 1</strong>
              </h4>
            </td>
            <td> </td>
            <td>
              <h4>
                <strong>Step 2</strong>
              </h4>
            </td>
          </tr>
          <tr>
            <td>
              <img src="step6.gif" />
            </td>
            <td> </td>
            <td>
              <img src="step6.gif" />
            </td>
          </tr>
        </table>
      </div>
      <br />
      <h4>
        <strong>Step 3</strong>
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
