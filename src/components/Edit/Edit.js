import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';


class Edit extends Component {

    componentDidMount = () => {
        this.getMovieDetail();
    }

    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload: this.props.match.params })
    }

    handleBack = (id) => {
        this.props.history.push('/details/' + id)
    }

    render() {
        return (
            <div className="Edit" >
                {this.props.reduxStore.genres.map(movie =>
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <h5>{movie.description}</h5>
                        <h4>Genres: {movie.genre_list}</h4>
                        <IconButton color='secondary' onClick={() => {this.handleBack(movie.id)}}><Cancel /></IconButton>
                    </div>
                )}
            </div>
        )
    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(Edit);