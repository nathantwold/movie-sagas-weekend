import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import List from '../List/List.js';

class Home extends Component {

    render() {
        return (
            <div className="Home" >
            <Router>
                <h2>In Home</h2>
                <List className="List" />
            </Router>
            </div>
        )
    }

}

export default connect()(Home);