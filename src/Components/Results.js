import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory';
import HOC from './HOC';

class Results extends Component {
  render() {
    let data = [];
    this.props.candidates.map(candidate => {
      let name = candidate[1].split(' ');
      data.push({
        id: candidate[0]['c'][0],
        name: name[1],
        votes: candidate[2]['c'][0],
      });
    });

    return (
      <div>
        <br />
        <h2>Live Fantasy Election Results</h2>
        {data[0] ? (
          <VictoryChart domain={{ y: [0, 10] }} domainPadding={{ x: 30 }}>
            <VictoryBar
              style={{ data: { fill: '#c43a31' }, tickLabels: {fontSize: "8px"} }}
              alignment="middle"
              barWidth={20}
              data={data}
              // data accessor for x values
              x="name"
              // data accessor for y values
              y="votes"
            />
          </VictoryChart>
        ) : null}
      </div>
    );
  }
}

export default HOC(Results);
