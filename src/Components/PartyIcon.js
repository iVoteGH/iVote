import React, { Component } from 'react';
import axios from 'axios';

class PartyIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconLink: '',
    };
  }

  async componentDidMount() {
    let memId;
    let iconLink;

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
    if (party === 'R') {
      iconLink = 'GOP.png';
    } else {
      iconLink = 'DNC.png';
    }
    this.setState({ iconLink });
  }
  render() {
    return <img id="partyIconImg" src={this.state.iconLink} />;
  }
}

export default PartyIcon;
