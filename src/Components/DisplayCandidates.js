import React, { Component } from "react";
import { Table, thead, tr, th, tbody, td } from "react-bootstrap";
import Waiting from "./Waiting";
import HOC from "./HOC";

class DisplayCandidates extends Component {
  constructor() {
    super();
    this.state = {
      selectedCandidate: null,
      candidateName: null,
      cast: false
    };
  }
  render() {
    return (
      <div>
        {this.state.cast ? (
          <Waiting />
        ) : this.props.candidates && this.props.candidates.length > 0 ? (
          <div>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Total Votes</th>
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
                    <td>{candidate[0].toString()}</td>
                    <td>{candidate[1]}</td>
                    <td>{candidate[2].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {this.state.selectedCandidate ? (
              <button
                type="button"
                onClick={() => {
                  this.props.castVote(this.state.selectedCandidate);
                  this.setState({ cast: true });
                }}
              >
                Vote for {this.state.candidateName}
              </button>
            ) : null}
          </div>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}

export default HOC(DisplayCandidates);
