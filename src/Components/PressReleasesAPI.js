import React, { Component } from "react";
import axios from "axios";
import { PressReleases } from ".";

class PressReleasesAPI extends Component {
  constructor() {
    super();
    this.state = {
      pressReleases: []
    };
  }

  async componentDidMount() {
    let memId;
    let response = await axios.get(`/api/memId/${this.props.state}`);
    let candidateName1 =
      response.data.results[0].first_name +
      " " +
      response.data.results[0].last_name;
    let candidateName2 =
      response.data.results[1].first_name +
      " " +
      response.data.results[1].last_name;
    if (candidateName1 === this.props.candidate) {
      memId = response.data.results[0].id;
    } else if (candidateName2 === this.props.candidate) {
      memId = response.data.results[1].id;
    }
    let pressRes = await axios.get(`/api/pressReleases/${memId}`);
    let pressReleases = pressRes.data.results.slice(0, 5);

    this.setState({
      pressReleases
    });
  }

  render() {
    return (
      <div>
        <PressReleases pressReleases={this.state.pressReleases} />
      </div>
    );
  }
}

export default PressReleasesAPI;
