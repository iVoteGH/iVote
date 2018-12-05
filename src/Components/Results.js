import React, { Component } from 'react';
import { VictoryBar, VictoryChart } from 'victory';
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
        <h1>
          <img src="DNC.png" height="50px" />
          <strong> Live 2020 Fantasy Election Draft Vote Count </strong>
          <img src="GOP.png" height="50px" />
        </h1>
        {data[0] ? (
          <VictoryChart domain={{ y: [0, 14] }} domainPadding={{ x: 30 }}>
            <VictoryBar
              style={{
                data: { fill: data => (data.id % 2 ? 'blue' : 'red') },
                tickLabels: { fontSize: '8px' },
              }}
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
