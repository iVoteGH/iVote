import React from "react";
import HOC from "./HOC";

const Loading = props => {
  return (
    <div>
      <h1>Hey there, voter!</h1>
      {/* pick which giphy...or none! :) */}
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
        <a href="https://giphy.com/gifs/bird-hungry-eagle-VBVY9IJKDxwHK">
          via GIPHY
        </a>
      </p>
      <iframe
        src="https://giphy.com/embed/McWY8InTbUrrW"
        width="480"
        height="422"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
      <p>
        <a href="https://giphy.com/stickers/eagle-McWY8InTbUrrW">via GIPHY</a>
      </p>
    </div>
  );
};

export default HOC(Loading);
