import React from "react";
import { DisplayCandidates, Results } from ".";
import HOC from "./HOC";

const Vote = props => {
  console.log("account", props.account);
  console.log("voted?", props.votedStatus);
  //if account is '' --> need to have something that tells you to log into metamask and does not display ability

  return (
    <div>
      {props.votedStatus ? (
        <Results candidates={props.candidates} />
      ) : (
        <DisplayCandidates />
      )}
    </div>
  );
};

export default HOC(Vote);
