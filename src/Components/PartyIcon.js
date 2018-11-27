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
    const donkey =
      'https://vectors.pro/wp-content/uploads/2017/10/democratic-donkey-vector-logo.png';
    const elephant =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Republicanlogo.svg/1179px-Republicanlogo.svg.png';
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
      iconLink = elephant;
    } else {
      iconLink = donkey;
    }
    this.setState({ iconLink });
  }
  render() {
    return <img id="partyIconImg" src={this.state.iconLink} />;
  }
}

export default PartyIcon;
