import React, { Component } from 'react';
import HOC from './HOC';
import {
  VotingRecordAPI,
  PressReleasesAPI,
  NewsAPI,
  Headshot,
  PartyIcon,
} from '.';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggles: [],
      didClick: {},
      modal: false,
    };
    this.clicked = this.clicked.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  clicked(evt) {
    let clickedState = { ...this.state.didClick };
    if (clickedState[evt.target.value]) {
      clickedState[evt.target.value] = !this.state.didClick[evt.target.value];
    } else {
      clickedState[evt.target.value] = true;
    }
    this.setState({ didClick: clickedState });
  }

  render() {
    return (
      <div>
        <br />
        <img
          src="https://i0.wp.com/www.e3radio.org/wp-content/uploads/2018/02/Meet-Candidates-Button_54020212-1507765977.jpg?fit=900%2C600&ssl=1"
          id="candidatesImg"
        />
        <h2>Meet the candidates below and when you're ready...</h2>
        <div>
          <div>
            {!this.props.votedStatus ? (
              <a
                className="btn btn-navy btn-lg text-white"
                role="button"
                href="/vote"
              >
                <strong>🇺🇸 Click Here to Go Vote! 🇺🇸</strong>
              </a>
            ) : (
              <a
                className="btn btn-navy btn-lg text-white"
                role="button"
                onClick={this.toggle}
              >
                Click Here to Go Vote!
              </a>
            )}
          </div>
        </div>
        <br />
        <h5>
          Click on a candidate to explore vote leanings, press releases, and
          news sources about each candidate.
        </h5>
        <div className="card-deck">
          {this.props.candidates.map((candidate, index) => (
            <div className="row col-sm-6 ">
              <div className="col-md-12">
                <div
                  className="card bg-primary candidate-card"
                  id="cardHeading"
                >
                  <div className="card-header" id={`heading${index}`}>
                    <h5 className="mb-0 candidate-name-heading">
                      <button
                        className="btn btn-link text-black candidate-info-card"
                        data-toggle="collapse"
                        data-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        <PartyIcon
                          candidate={candidate[1]}
                          state={candidate[3]}
                        />
                        <Headshot
                          candidate={candidate[1]}
                          state={candidate[3]}
                        />
                        <PartyIcon
                          candidate={candidate[1]}
                          state={candidate[3]}
                        />
                        <p>{candidate[1]}</p>
                      </button>
                    </h5>
                  </div>
                </div>
                <div
                  id={`collapse${index}`}
                  className="collapse hide"
                  aria-labelledby={`heading${index}`}
                >
                  <div className="card-body">
                    <p>Current Vote Count: {candidate[2].toString()}</p>
                    <div id={`card${index}`}>
                      <p>
                        <button
                          className="btn btn-danger"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#votingRecord${index}`}
                          aria-expanded="false"
                          aria-controls={`votingRecord${index}`}
                          value={`${index}`}
                          onClick={this.clicked}
                        >
                          Voting Record
                        </button>{' '}
                        <button
                          className="btn btn-danger"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#pressReleases${index}`}
                          aria-expanded="false"
                          aria-controls={`pressReleases${index}`}
                        >
                          Press Releases
                        </button>{' '}
                        <button
                          className="btn btn-danger"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#newsArticles${index}`}
                          aria-expanded="false"
                          aria-controls={`newsArticles${index}`}
                        >
                          News Articles
                        </button>
                      </p>
                      <div
                        className="collapse"
                        id={`votingRecord${index}`}
                        data-parent={`#card${index}`}
                      >
                        <div className="card card-body">
                          <VotingRecordAPI
                            // didClick={this.state.didClick[index]}
                            candidate={candidate[1]}
                            state={candidate[3]}
                          />
                        </div>
                      </div>
                      <div
                        className="collapse"
                        id={`pressReleases${index}`}
                        data-parent={`#card${index}`}
                      >
                        <div className="card card-body">
                          <PressReleasesAPI
                            candidate={candidate[1]}
                            state={candidate[3]}
                          />
                        </div>
                      </div>
                      <div
                        className="collapse"
                        id={`newsArticles${index}`}
                        data-parent={`#card${index}`}
                      >
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
              </div>
            </div>
          ))}
        </div>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader
              toggle={this.toggle}
              className="modal-title text-center"
            >
              <strong>VOTER FRAUD ALERT</strong>
            </ModalHeader>
            <ModalBody className="text-center">
              ⚠️{' '}
              <strong>
                WARNING!!! VOTER FRAUD ALERT!!! YOU HAVE ALREADY VOTED...DON'T
                EVEN THINK ABOUT IT!!!
              </strong>{' '}
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
