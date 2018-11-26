import React from "react";
import { DisplayCandidates, Results } from ".";
import HOC from "./HOC";

const Vote = props => {
  return (
    <div>
      {props.votedStatus ? ( <Results candidates={props.candidates} />
      ) : ( <DisplayCandidates /> )}
    </div>
  );
};

export default HOC(Vote);
