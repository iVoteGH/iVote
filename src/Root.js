import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  Vote,
  Results,
  Info,
  Main,
  NewsAPI,
  VotingRecordAPI
} from "./Components";

const Root = () => {
  return (
    <Router>
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">Election Page</Link>
        </nav>
        <main>
          <div className="container text-center">
            <h1>Duel of 1804</h1>
            <p>Federalists v Democratic-Republicans</p>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/vote" component={Vote} />
              <Route exact path="/results" component={Results} />
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Root;
