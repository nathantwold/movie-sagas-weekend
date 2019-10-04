import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div className="Navbar" >
            <Router>
                <h2>In Navbar</h2>
            </Router>
            </div>
        )
    }

}

export default connect()(Navbar);