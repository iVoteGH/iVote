import React from "react";
import { VictoryBar, VictoryAxis, VictoryChart } from "victory";
import HOC from "./HOC";

const Results = props => {
  let data = [];
  props.candidates.map(candidate =>
    data.push({ id: candidate[0]["c"][0], votes: candidate[2]["c"][0] })
  );
  return (
    <div>
      <h2>RESULTS!</h2>
      <VictoryBar
        data={data}
        // data accessor for x values
        x="id"
        // data accessor for y values
        y="votes"
      />
    </div>
  );
};

export default HOC(Results);
