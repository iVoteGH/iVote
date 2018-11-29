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
        {/* <table className="table table-borderless">
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
              <img src="checkout_step1.gif" />
            </td>
            <td> </td>
            <td>
              <img src="step6.gif" />
            </td>
          </tr>
        </table> */}
      </div>
      <br />
      <h4>
        <strong>STEP 2:</strong> After you have submitted your vote using
        MetaMask view the results.
      </h4>
      {/* <h4>
        <strong>Step 3</strong>
      </h4> */}
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
