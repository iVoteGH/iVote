import React, { Component } from 'react';
import axios from 'axios';
import { VoteGraph } from '.';

class VotingRecordAPI extends Component {
  constructor() {
    super();
    this.state = {
      votingComparisons: { libAgree: 0, conAgree: 0 },
    };
  }

  async componentDidMount() {
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
    const votesWithParty = member.data.results[0].roles[0].votes_with_party_pct;
    let libAgree;
    let conAgree;

    if (party === 'R') {
      conAgree = Math.round(votesWithParty);
      libAgree = 100 - conAgree;
    } else {
      libAgree = Math.round(votesWithParty);
      conAgree = 100 - libAgree;
    }

    this.setState({ votingComparisons: { libAgree, conAgree } });
  }

  render() {
    return (
      <div>
        <VoteGraph
          libAgree={this.state.votingComparisons.libAgree}
          conAgree={this.state.votingComparisons.conAgree}
        />
      </div>
    );
  }
}

export default VotingRecordAPI;
