import React, { Component } from "react";
import axios from "axios";

class NewsAPI extends Component {
  constructor() {
    super();
    this.state = {
      candidate: "Kirsten Gillibrand",
      articles: [],
      sources: [], 
      state: "NY", 
      votingComparisons: {libAgree: 0, conAgree: 0}
    };
    this.artToState = this.artToState.bind(this);
    this.changeSource = this.changeSource.bind(this);
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

    //need to check if there is an id returned and if so --> then use id to get record

    //then call 2 requests --> one comparing to most liberal and one to most conservative
    let liberalCompare = await axios.get(`/api/compareLib/${memId}`); 
    let conservativeCompare = await axios.get(`/api/compareCon/${memId}`); 
    let libAgree = Math.floor((liberalCompare.data.results[0].agree_percent - 22.88)/77.12*100)
    let conAgree = Math.floor((conservativeCompare.data.results[0].agree_percent - 22.88)/77.12*100)
    console.log('comparisons', liberalCompare.data.results, conservativeCompare.data.results)
    this.setState({ 
      votingComparisons: {libAgree, conAgree}
    })
  }

  changeSource(e) {
    let sources = this.state.sources;
    sources.push(e.target.value);
    this.setState({ sources });
    this.artToState();
    console.log("CURR STATE: ", this.state);
  }

  async artToState() {
    let sources = this.state.sources.join(", ");
    let response = await axios.get(
      `/api/search?q=${this.state.candidate}&sources=${sources}`
    );
    this.setState({ articles: response.data.articles });
  }

  render() {
    return (
      <div>
        <button value="the-new-york-times" onClick={this.changeSource}>
          NYT
        </button>
        {this.state.articles.map(art => (
          <div>
            <h1>{art.title}</h1>
            <p>{art.source.name}</p>
          </div>
        ))}

        <p>Votes Liberal: {this.state.votingComparisons.libAgree}%</p>
        <p>Votes Conservative: {this.state.votingComparisons.conAgree}%</p>
      </div>
    );
  }
}

export default NewsAPI;
