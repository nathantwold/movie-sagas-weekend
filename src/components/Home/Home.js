import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar/Navbar.js';

class Home extends Component {

    render() {
        return (
            <div className="Home" >
            <Router>
                <h2>In Home</h2>
                <Navbar />
            </Router>
            </div>
        )
    }

}

export default connect()(Home);