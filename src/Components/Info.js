import React, { Component } from 'react';
import HOC from './HOC';
import axios from 'axios';
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
  async somethingTemp() {
    let memId;
    let response = await axios.get(`/api/memId/${this.props.state}`);
    let candidateName1 =
      response.data.results[0].first_name +
      ' ' +
      response.data.results[0].last_name;
    let candidateName2 =
      response.data.results[1].first_name +
      ' ' +
      response.data.results[1].last_name;
    if (candidateName1 === this.props.candidate) {
      memId = response.data.results[0].id;
    } else if (candidateName2 === this.props.candidate) {
      memId = response.data.results[1].id;
    }
    const member = await axios.get(`/api/members/${memId}`);
    const party = member.data.results[0].current_party;
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
        <p>
          Explore vote leanings, press releases, and news sources about each
          candidate
        </p>
        <div className="card-deck">
          {this.props.candidates.map((candidate, index) => (
            <div className="row col-sm-6">
              <div className="col-md-12">
                <div className="card" id="cardHeading">
                  <div className="card-header" id={`heading${index}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link text-black"
                        data-toggle="collapse"
                        data-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        <Headshot
                          candidate={candidate[1]}
                          state={candidate[3]}
                        />
                        {candidate[1]}
                        <PartyIcon
                          candidate={candidate[1]}
                          state={candidate[3]}
                        />
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
            </div>
          ))}
        </div>
        {!this.props.votedStatus ? (
          <a
            className="btn btn-primary btn-lg text-white"
            role="button"
            href="/vote"
          >
            Go to Ballot!
          </a>
        ) : (
          <a
            className="btn btn-primary btn-lg text-white"
            role="button"
            onClick={this.toggle}
          >
            Go to Ballot!
          </a>
        )}{' '}
        <a className="btn btn-primary btn-lg" role="button" href="/results">
          Results
        </a>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader
              toggle={this.toggle}
              className="col-12 modal-title text-center"
            >
              <strong>*** VOTER FRAUD ALERT ***</strong>{' '}
            </ModalHeader>
            <ModalBody>
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
