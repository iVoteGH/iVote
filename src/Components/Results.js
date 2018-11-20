import React from 'react';
import { VictoryBar, VictoryAxis, VictoryChart } from 'victory';
import HOC from './HOC';

const Results = props => {
  let data = [];
  props.candidates.map(candidate =>
    data.push({
      id: candidate[0]['c'][0],
      name: candidate[1],
      votes: candidate[2]['c'][0],
    })
  );
  return (
    <div>
      <h2>RESULTS!</h2>
      <VictoryChart domainPadding={10}>
        <VictoryBar
          style={{ data: { fill: '#c43a31' } }}
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
};

export default HOC(Results);
