import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  Vote,
  Results,
  Info,
  Main,
  NewsAPI,
  VotingRecordAPI,
  AdminPage,
  Navbar
} from "./Components";

const Root = () => {
  return (
    <Router>
      <div id="root">
      <Navbar/>
        <main>
          <div className="container text-center">
            <h1>Duel of 1804</h1>
            <p>Federalists v Democratic-Republicans</p>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/vote" component={Vote} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/admin" component={AdminPage} />
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Root;
