import React, { Component } from "react";
import { Table, thead, tr, th, tbody, td } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "whatwg-fetch";
import Waiting from "./Waiting";
import Loading from "./Loading";
import HOC from "./HOC";

const Msg = () => (
  <div> Congrats! Your vote has been registered! 😀 🗳️ 🦅 🗽 🎉 🔔 🇺🇸 😎 </div>
);

class DisplayCandidates extends Component {
  constructor() {
    super();
    this.state = {
      selectedCandidate: null,
      candidateName: null,
      cast: false,
      recipient: ""
    };
    //this.sendSms = this.sendSms.bind(this);
  }
  sendSms = () => {
    fetch("/api/messages", {
      method: "POST",
      headers: {
        Accept: "application/JSON",
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({ recipient: this.state.recipient })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  };

  render() {
    return (
      <div>
        {this.state.cast ? (
          <Waiting />
        ) : this.props.candidates && this.props.candidates.length > 0 ? (
          <div>
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
                        candidateName: candidate[1].toString()
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
                  //this.sendSms;
                }}
              >
                Vote for {this.state.candidateName}
              </button>
            ) : null}
          </div>
        ) : (
          <div>
            {/* <h1>Loading...</h1> */}
            <Loading />
          </div>
        )}
        <ToastContainer autoClose={2500} />
        <button onClick={this.sendSms}>Send SMS</button>
      </div>
    );
  }
}

export default HOC(DisplayCandidates);
