import React, { Component } from "react";
import axios from "axios";

class NewsAPI extends Component {
  constructor() {
    super();
    this.state = {
      candidate: "Merkel",
      articles: [],
      sources: []
    };
    this.artToState = this.artToState.bind(this);
    this.changeSource = this.changeSource.bind(this);
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
      </div>
    );
  }
}

export default NewsAPI;
