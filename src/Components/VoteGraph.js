import React from 'react';
import { VictoryBar, VictoryStack } from 'victory';

const VoteGraph = props => {
  return (
    <div>
      <p>Votes Liberal: {props.libAgree}%</p>
      <p>Votes Conservative: {props.conAgree}%</p>
      <div>
        <VictoryStack
          horizontal
          colorScale={['blue', 'red']}
          height={80}
          width={400}
          // animate={{ duration: 2000 }}
        >
          <VictoryBar data={[{ x: 'a', y: props.libAgree }]} />
          <VictoryBar data={[{ x: 'b', y: props.conAgree }]} />
        </VictoryStack>
      </div>
    </div>
  );
};

export default VoteGraph;
