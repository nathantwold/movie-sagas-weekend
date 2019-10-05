import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import List from '../List/List.js';

class Home extends Component {

    getDetail = (id) => {
        this.props.history.push('/details/' + id)
    }

    render() {
        return (
            <div className="Home" >
                <Router>
                    <h2 className="App-title">Movie Sagas</h2>
                    <List getDetail={this.getDetail} />
                </Router>
            </div>
        )
    }

}

export default connect()(Home);