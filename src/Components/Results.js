import React, { Component } from "react";
import { VictoryBar, VictoryChart } from "victory";
import HOC from "./HOC";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      chartWidth: window.innerWidth
    });
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions(event) {
    this.setState({
      chartWidth: event.target.innerWidth
    });
  }
  render() {
    let data = [];
    this.props.candidates.map(candidate =>
      data.push({
        id: candidate[0]["c"][0],
        name: candidate[1],
        votes: candidate[2]["c"][0]
      })
    );
    return (
      <div>
        <h2>RESULTS!</h2>

        <VictoryChart
          domain={{ y: [0, 10] }}
          domainPadding={{ x: 100 }}
          padding={{ top: 60, bottom: 60, left: 300, right: 300 }}
          width={this.state.chartWidth}
          height={400}
        >
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            alignment="start"
            barWidth={40}
            data={data}
            // data accessor for x values
            x="name"
            // data accessor for y values
            y="votes"
          />
        </VictoryChart>
      </div>
    );
  }
}

export default HOC(Results);
