import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IconButton, OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import { Cancel, Save } from '@material-ui/icons';


class Edit extends Component {

    state = {
        movie: {
            title: '',
            description: '',
            id: this.props.match.params.id
        }
    }

    componentDidMount = () => {
        this.getMovieDetail();
    }

    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload: this.props.match.params })
    }

    handleBack = (id) => {
        this.props.history.push('/details/' + id)
        this.getMovieDetail();
    }

    handleChange = (event, input) => {
        this.setState({
            movie: {
                ...this.state.movie,
                [input]: event.target.value
            }
        })
    }

    handleSave = (movie) => {
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movie })
        this.setState({
            movie: {
                title: '',
                description: ''
            }
        })
        this.handleBack(movie.id);
    }

    render() {
        return (
            <div className="Edit" >
                {this.props.reduxStore.detail.map(movie =>
                    <div key={movie.id}>
                        {this.state.movie.title === '' ? <h2>{movie.title}</h2> :
                            <h2>{this.state.movie.title}</h2>}
                        <FormControl variant="outlined">
                            <InputLabel>Edit title</InputLabel>
                            <OutlinedInput value={this.state.movie.title}
                                onChange={(event) => this.handleChange(event, 'title')}>
                            </OutlinedInput>
                        </FormControl>
                        {this.state.movie.description === '' ? <h4>{movie.description}</h4> :
                            <h4>{this.state.movie.description}</h4>}
                        <FormControl variant="outlined">
                            <InputLabel>Edit description</InputLabel>
                            <OutlinedInput value={this.state.movie.description}
                                onChange={(event) => this.handleChange(event, 'description')}>
                            </OutlinedInput>
                        </FormControl>
                        <h4>Genres: {movie.genre_list}</h4>
                        <br />
                        <IconButton color='secondary' onClick={() => { this.handleBack(movie.id) }}><Cancel /></IconButton>
                        <IconButton color='primary' onClick={() => { this.handleSave(movie) }}><Save /></IconButton>
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