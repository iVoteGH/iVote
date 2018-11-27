import React, { Component } from 'react';
import { Table, thead, tr, th, tbody, td } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'whatwg-fetch';
import { Waiting, MetaMaskWarning } from '.';
import HOC from './HOC';

const Msg = () => (
  <div> Congrats! You've almost saved democracy! 😀 🗳️ 🦅 🗽 🎉 🔔 🇺🇸 😎 </div>
);

class DisplayCandidates extends Component {
  constructor() {
    super();
    this.state = {
      selectedCandidate: null,
      candidateName: null,
      cast: false,
      recipient: '',
    };
  }

  sendSms = () => {
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({ recipient: this.state.recipient }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
          });
        } else {
          this.setState({
            error: true,
            submitting: false,
          });
        }
      });
  };

  render() {
    console.log('account HEREEE', this.props.account);
    return (
      <div>
        {!this.props.account ? (
          <MetaMaskWarning />
        ) : this.state.cast ? (
          <Waiting sendSMS={this.sendSms} />
        ) : this.props.candidates && this.props.candidates.length > 0 ? (
          <div>
            <br />
            <br />
            <h2>Select a Candidate</h2>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Total Votes</th>
                </tr>
              </thead>
              <tbody>
                {this.props.candidates.map(candidate => (
                  <tr
                    key={candidate[0].toString()}
                    onClick={() =>
                      this.setState({
                        selectedCandidate: candidate[0].toString(),
                        candidateName: candidate[1].toString(),
                      })
                    }
                  >
                    <th scope="row">{candidate[0].toString()}</th>
                    <td>{candidate[1]}</td>
                    <td>{candidate[2].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {this.state.selectedCandidate ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.props.castVote(this.state.selectedCandidate);
                  this.setState({ cast: true });
                  toast.success(<Msg />);
                }}
              >
                Vote for {this.state.candidateName}
              </button>
            ) : null}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}

export default HOC(DisplayCandidates);
