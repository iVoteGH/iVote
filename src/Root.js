import React from 'react'
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import {App, Results} from './Components'

 

const Root = () => {
  return (
    <Router>
      <div id="root">
        <nav>
          <a href="#">Election Page</a>
        </nav>
        <main>
          <div id='main-section'>
            <h1>Election of 1800</h1>
            <p>Federalists v Democratic-Republicans</p>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/results" component={Results}/>
            </Switch>
            {/* <button type="button"><Link to="/app">Go Vote!</Link></button> */}
          </div>
        </main>
      </div>
    </Router>
  )
}

export default Root
