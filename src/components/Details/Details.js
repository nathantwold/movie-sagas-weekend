import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

class Details extends Component {

    render() {
        return (
            <div className="Details" >
            <Router>
                <h2 onClick={() => console.log('click')}>In Details</h2>
            </Router>
            </div>
        )
    }

}

export default connect()(Details);