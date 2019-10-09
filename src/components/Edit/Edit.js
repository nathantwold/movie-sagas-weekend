import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IconButton, FilledInput, InputLabel, FormControl } from '@material-ui/core';
import { Cancel, Save } from '@material-ui/icons';


class Edit extends Component {

    // local state to hold input for PUT call to database
    state = {
        movie: {
            title: '',
            description: '',
            id: this.props.match.params.id
        },
    }

    // run on page load
    componentDidMount = () => {
        this.getMovieDetail();
    }

    // populates page with selected movie from redux store
    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload: this.props.match.params })
    }

    // clear local state and navigate back to movie detail page
    handleBack = (id) => {
        this.setState({
            movie: {
                title: '',
                description: ''
            }
        })
        this.props.history.push('/details/' + id)
    }

    // set local state on input entry
    handleChange = (event, input) => {
        this.setState({
            movie: {
                ...this.state.movie,
                [input]: event.target.value
            }
        })
    }

    // send local state to database
    handleSave = () => {
        if (this.state.movie.title === '' || this.state.movie.description === '') {
            alert('Please enter a new title AND description to save')
        } else {
            this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movie })
            this.handleBack(this.state.movie.id);
        }
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
                            <FilledInput defaultValue={movie.title}
                                onChange={(event) => this.handleChange(event, 'title')}>
                            </FilledInput>
                        </FormControl>
                        {this.state.movie.description === '' ? <h4>{movie.description}</h4> :
                            <h4>{this.state.movie.description}</h4>}
                        <FormControl fullWidth>
                            <InputLabel>Edit description</InputLabel>
                            <FilledInput defaultValue={movie.description}
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