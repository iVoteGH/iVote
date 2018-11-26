import React, { Component } from "react";
import HOC from "./HOC";
import { VotingRecordAPI, PressReleasesAPI, NewsAPI } from "./index";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggles: [],
      modal: false,
      didClick: {}
    };
    this.clicked = this.clicked.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  clicked(evt) {
    let clickedState = { ...this.state.didClick };
    if (clickedState[evt.target.value]) {
      clickedState[evt.target.value] = !this.state.didClick[evt.target.value];
    } else {
      clickedState[evt.target.value] = true;
    }
    this.setState({
      didClick: clickedState
    });
  }

  render() {
    return (
      <div>
        <h3>All Candidates</h3>
        <p>Explore news sources about each candidate</p>
        <div id="accordion">
          {this.props.candidates.map((candidate, index) => (
            <div className="card">
              <div className="card-header" id={`heading${index}`}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {candidate[1]}
                  </button>
                </h5>
              </div>
              <div
                id={`collapse${index}`}
                className="collapse hide"
                aria-labelledby={`heading${index}`}
              >
                <div className="card-body">
                  <p>Current Vote Count: {candidate[2].toString()}</p>
                  <p>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#votingRecord${index}`}
                      aria-expanded="false"
                      aria-controls={`votingRecord${index}`}
                      value={`${index}`}
                      onClick={this.clicked}
                    >
                      Voting Record
                    </button>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#pressReleases${index}`}
                      aria-expanded="false"
                      aria-controls={`pressReleases${index}`}
                    >
                      Press Releases
                    </button>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#newsArticles${index}`}
                      aria-expanded="false"
                      aria-controls={`newsArticles${index}`}
                    >
                      News Articles
                    </button>
                  </p>
                  <div className="collapse" id={`votingRecord${index}`}>
                    <div className="card card-body">
                      <VotingRecordAPI
                        didClick={this.state.didClick[index]}
                        candidate={candidate[1]}
                        state={candidate[3]}
                      />
                    </div>
                  </div>
                  <div className="collapse" id={`pressReleases${index}`}>
                    <div className="card card-body">
                      <PressReleasesAPI
                        candidate={candidate[1]}
                        state={candidate[3]}
                      />
                    </div>
                  </div>
                  <div className="collapse" id={`newsArticles${index}`}>
                    <div className="card card-body">
                      <NewsAPI
                        candidate={candidate[1]}
                        index={index}
                        election={this.props.elections[0].name}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="btn btn-primary btn-lg"
          role="button"
          href="/vote"
          // onClick={() => this.toggle}
        >
          Go to Ballot!
        </a>
        <div>
          <Button color="danger" onClick={this.toggle}>
            Wait a second!
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader
              toggle={this.toggle}
              className="col-12 modal-title text-center"
            >
              <strong>*** VOTER FRAUD ALERT ***</strong>{" "}
            </ModalHeader>
            <ModalBody>
              ⚠️{" "}
              <strong>
                WARNING!!! VOTER FRAUD ALERT!!! YOU HAVE ALREADY VOTED...DON'T
                EVEN THINK ABOUT IT!!!!!!!!!!!!!!!!!!!!!!!!
              </strong>{" "}
              ⚠️
              <img src="https://lishacauthen.files.wordpress.com/2013/04/dog_shaking_finger.gif" />
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default HOC(Info);
