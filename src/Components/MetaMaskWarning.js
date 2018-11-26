import React from "react";
import HOC from "./HOC";

const MetaMaskWarning = props => {
  return (
    <div>
      <h1>Hey there, voter!</h1>
      <h2>Are you sure you're logged into MetaMask?</h2>;
      <iframe
        src="https://giphy.com/embed/VBVY9IJKDxwHK"
        width="343"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
      <p>
        <a href="https://giphy.com/gifs/bird-hungry-eagle-VBVY9IJKDxwHK" />
      </p>
    </div>
  );
};

export default HOC(MetaMaskWarning);
