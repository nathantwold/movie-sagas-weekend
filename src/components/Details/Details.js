import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Details extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    render() {
        return (
            <div className="Details" >
                {this.props.reduxStore.movies.map(movie => {
                    if (movie.id === this.props.match.params.id) {
                        return <div>
                            <h2>{movie.name}</h2>
                            <h5>{movie.description}</h5>
                        </div>
                    }
                })}
                <Link to='/'><button>Back</button></Link>
            </div>
        )
    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(Details);