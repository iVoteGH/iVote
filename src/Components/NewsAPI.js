import React, { Component } from 'react';
import axios from 'axios';

class NewsAPI extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      singleSource: '',
    };
    this.artToState = this.artToState.bind(this);
  }

  async artToState(e) {
    // currently searches by candidate name
    const searchTerm = `${this.props.candidate}`;
    let response = await axios.get(
      `/api/search?q=${searchTerm}&sources=${e.target.value}`
    );
    this.setState({ articles: response.data.articles });
  }

  render() {
    return (
      <div className="accordion" id={`newsAccordion${this.props.index}`}>
        <div className="card">
          <div className="card-header" id={`headingOne${this.props.index}`}>
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target={`#collapseOne${this.props.index}`}
                aria-expanded="false"
                aria-controls={`collapseOne${this.props.index}`}
                value="associated-press"
                onClick={this.artToState}
              >
                Associated Press
              </button>
            </h5>
          </div>

          <div
            id={`collapseOne${this.props.index}`}
            className="collapse"
            aria-labelledby={`headingOne${this.props.index}`}
            data-parent={`#newsAccordion${this.props.index}`}
          >
            <div className="card-body">
              {this.state.articles.map(art => (
                <div>
                  <p className="press-releases">
                    <img src={art.urlToImage} height="50" />{' '}
                    <a href={art.url}>{art.title}</a> <br />
                    <small>{Date(art.publishedAt).slice(0, 15)}</small>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id={`headingTwo${this.props.index}`}>
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target={`#collapseTwo${this.props.index}`}
                aria-expanded="false"
                aria-controls={`collapseTwo${this.props.index}`}
                value="reuters"
                onClick={this.artToState}
              >
                Reuters
              </button>
            </h5>
          </div>
          <div
            id={`collapseTwo${this.props.index}`}
            className="collapse"
            aria-labelledby={`headingTwo${this.props.index}`}
            data-parent={`#newsAccordion${this.props.index}`}
          >
            <div className="card-body">
              {this.state.articles.map(art => (
                <div>
                  <p className="press-releases">
                    <img src={art.urlToImage} height="50" />{' '}
                    <a href={art.url}>{art.title}</a> <br />
                    <small>{Date(art.publishedAt).slice(0, 15)}</small>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id={`headingThree${this.props.index}`}>
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target={`#collapseThree${this.props.index}`}
                aria-expanded="false"
                aria-controls={`collapseThree${this.props.index}`}
                value="the-wall-street-journal"
                onClick={this.artToState}
              >
                Wall Street Journal
              </button>
            </h5>
          </div>
          <div
            id={`collapseThree${this.props.index}`}
            className="collapse"
            aria-labelledby={`headingThree${this.props.index}`}
            data-parent={`#newsAccordion${this.props.index}`}
          >
            <div className="card-body">
              {this.state.articles.map(art => (
                <div>
                  <p className="press-releases">
                    <img src={art.urlToImage} height="50" />{' '}
                    <a href={art.url}>{art.title}</a> <br />
                    <small>{Date(art.publishedAt).slice(0, 15)}</small>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsAPI;
