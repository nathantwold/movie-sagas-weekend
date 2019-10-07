import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={Details} />
          <Route exact path='/details/:id/edit' component={Edit} />
          <footer id='footer'></footer>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
