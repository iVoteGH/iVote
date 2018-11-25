import React from 'react';

const PressReleases = props => {
  return (
    <div>
      <p>Recent Press Releases: </p>
      <div className="container">
        {props.pressReleases.map((release, i) => (
          <p key={i} className="press-releases">
            <a href={release.url}>{release.title}</a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default PressReleases;
