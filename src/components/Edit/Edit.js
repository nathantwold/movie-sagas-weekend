import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IconButton, FilledInput, InputLabel, FormControl } from '@material-ui/core';
import { Cancel, Save } from '@material-ui/icons';


class Edit extends Component {

    state = {
        movie: {
            title: '',
            description: '',
            id: this.props.match.params.id
        },
    }

    componentDidMount = () => {
        this.getMovieDetail();
    }

    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload: this.props.match.params })
    }

    handleBack = (id) => {
        this.setState({
            movie: {
                title: '',
                description: ''
            }
        })
        this.props.history.push('/details/' + id)
    }

    handleChange = (event, input) => {
        this.setState({
            movie: {
                ...this.state.movie,
                [input]: event.target.value
            }
        })
    }

    handleSave = () => {
        if (this.state.movie.title === '' || this.state.movie.description === '') {
            alert('Please enter a new title AND description to save')
        } else { this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movie }) }
        this.handleBack(this.state.movie.id);
    }

    render() {
        return (
            <div className="Edit" >
                {this.props.reduxStore.detail.map(movie =>
                    <div className="Form" key={movie.id}>
                        {this.state.movie.title === '' ? <h2>{movie.title}</h2> :
                            <h2>{this.state.movie.title}</h2>}
                        <FormControl>
                            <InputLabel>Edit title</InputLabel>
                            <FilledInput
                                onChange={(event) => this.handleChange(event, 'title')}>
                            </FilledInput>
                        </FormControl>
                        {this.state.movie.description === '' ? <h4>{movie.description}</h4> :
                            <h4>{this.state.movie.description}</h4>}
                        <FormControl>
                            <InputLabel>Edit description</InputLabel>
                            <FilledInput
                                onChange={(event) => this.handleChange(event, 'description')}>
                            </FilledInput>
                        </FormControl>
                        <h4>Genres: {movie.genre_list}</h4>
                        <br />
                        <IconButton color='secondary' onClick={() => { this.handleBack(movie.id) }}><Cancel /></IconButton>
                        <IconButton color='primary' onClick={this.handleSave}><Save /></IconButton>
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