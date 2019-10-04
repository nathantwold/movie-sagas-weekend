import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
      </div>
    );
  }
}

// const mapStateToProps = (reduxStore) => {
//   reduxStore
// }

export default connect()(App);
