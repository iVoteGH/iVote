import React, { Component } from "react";
import { Table, thead, tr, th, tbody, td } from "react-bootstrap";

class DisplayCandidates extends Component {
  constructor() {
    super();
    this.state = {
      selectedCandidate: null,
      candidateName: null
    };
  }

  render() {
    console.log("candidyatessss", this.props.candidates);
    console.log("state in display candidates", this.state);
    return (
      <div>
        {this.props.candidates && this.props.candidates.length > 0 ? (
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
                onClick={() =>
                  this.props.castVote(this.state.selectedCandidate)
                }
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

export default DisplayCandidates;
