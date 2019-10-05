import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Details extends Component {

    componentDidMount = () => {
        this.getMovieDetail();
    }

    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload: this.props.match.params })
    }

    render() {
        return (
            <div className="Details" >
                {this.props.reduxStore.genres.map(movie => 
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} alt={movie.description} />
                        <h5>{movie.description}</h5>
                        <h4>Genre: {movie.name}</h4>
                    </div>
                )}
                <Link to='/'><button>Back</button></Link>
            </div>
        )
    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(Details);