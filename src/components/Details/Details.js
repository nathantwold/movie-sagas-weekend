import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Details extends Component {

    componentDidMount = () => {
        this.getMovieDetail();
    }

    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload: this.props.match.params })
        console.log(this.props.match.params);
    }

    handleBack = () => {
        this.props.history.push('/')
    }

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
                        <h5>{movie.description}</h5>
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