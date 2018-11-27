import React, { Component } from 'react';
import axios from 'axios';

class Headshot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hsLink: '',
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

    const hsLink = `https://theunitedstates.io/images/congress/225x275/${memId}.jpg`;
    this.setState({ hsLink });
  }
  render() {
    return <img id="headShotImg" src={this.state.hsLink} />;
  }
}

export default Headshot;
