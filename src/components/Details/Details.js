import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Details extends Component {

    // run on page load
    componentDidMount = () => {
        this.getMovieDetail();
    }

    // populates page with selected movie from redux store
    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload: this.props.match.params })
    }

    // navigate to movie list/home page
    handleBack = () => {
        this.props.history.push('/')
    }

    // navigate to edit page for selected movie
    handleEdit = (id) => {
        this.props.history.push(`/details/${id}/edit`)
    }

    render() {
        return (
            <div className="Details" >
                {this.props.reduxStore.detail.map(movie =>
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} alt={movie.description} />
                        <h4>{movie.description}</h4>
                        <h4>Genres: {movie.genre_list}</h4>
                        <Button color='secondary' variant='contained' onClick={this.handleBack}>Back</Button>
                        <Button color='primary' variant='contained' onClick={() => this.handleEdit(movie.id)} >Edit</Button>
                    </div>
                )}
            </div>
        )
    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(Details);