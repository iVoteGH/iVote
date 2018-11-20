import React, { Component } from "react";
import axios from "axios";

class VotingRecordAPI extends Component {
  constructor() {
    super();
    this.state = {
      candidate: "Kirsten Gillibrand",
      state: "NY", 
      votingComparisons: {libAgree: 0, conAgree: 0}, 
      pressReleases: []
    };
  }

  async componentDidMount(){ 
    let memId; 
    let response = await axios.get(
      `/api/memId/${this.state.state}`
    );
    let candidateName1 = response.data.results[0].first_name + ' ' + response.data.results[0].last_name; 
    let candidateName2 = response.data.results[1].first_name + ' ' + response.data.results[1].last_name; 
    
    if (candidateName1 === this.state.candidate){ 
      memId = response.data.results[0].id; 
    } else if (candidateName2 === this.state.candidate){ 
      memId = response.data.results[1].id; 
    }

    let liberalCompare = await axios.get(`/api/compareLib/${memId}`); 
    let conservativeCompare = await axios.get(`/api/compareCon/${memId}`); 
    let libAgree = Math.floor((liberalCompare.data.results[0].agree_percent - 22.88)/77.12*100)
    let conAgree = Math.floor((conservativeCompare.data.results[0].agree_percent - 22.88)/77.12*100)
   
    let pressRes = await axios.get(`/api/pressReleases/${memId}`); 
    let pressReleases = pressRes.data.results; 

    this.setState({ 
      votingComparisons: {libAgree, conAgree}, pressReleases
    })
  }


  render() {
    return (
      <div>
        <p>Votes Liberal: {this.state.votingComparisons.libAgree}%</p>
        <p>Votes Conservative: {this.state.votingComparisons.conAgree}%</p>
        <p>Recent Press Releases: </p>
        {this.state.pressReleases.map((release, i) => ( 
            <p key={i}><a href={release.url}>{release.title}</a></p>
        ))}
      </div>
    );
  }
}

export default VotingRecordAPI;
