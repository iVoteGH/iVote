import React from 'react';
import HOC from './HOC';
import { Link } from 'react-router-dom';

const Main = props => {
  return (
    <div className="masthead text-center">
      <div id="main">
        <br />
        <br />
        <br />
        <br />
        <br />
        {props.elections.map(election => (
          <div>
            <div class="night-hotel">
              2020 &nbsp; &nbsp;Fantasy Election&nbsp; &nbsp; Draft
            </div>
            <link
              async
              href="http://fonts.googleapis.com/css?family=Monoton"
              data-generated="http://enjoycss.com"
              rel="stylesheet"
              type="text/css"
            />
            <br />
            <br />
            <br />
            <Link to="/info">
              <button type="button" className="btn btn-danger btn-lg">
                <strong>🇺🇸 GO VOTE 🇺🇸</strong>
              </button>
            </Link>
            <br />
            <br />
            <Link to="/instructions">
              <button type="button" className="btn btn-danger btn-md">
                <strong>Instructions on How to Vote</strong>
              </button>
            </Link>
            <br />
            <br />
            <Link to="/blockchain">
              <button type="button" className="btn btn-danger btn-md">
                <strong>Why Blockchain?</strong>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HOC(Main);
