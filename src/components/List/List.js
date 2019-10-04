import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

class List extends Component {

    state = {
        movie: {
            title: '',
            description: ''
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    hover = (movie) => {
        this.setState({
            movie: {
                title: movie.title,
                description: movie.description
            }
        })
    }

    render() {

        return (
            <Router>
                <div className="movieList">
                    {this.props.reduxStore.movies.map(movie => (
                        <div className="cell" key={movie.id}>
                            <img className="cellImage" onMouseOver={() => this.hover(movie)}
                                onClick={() => this.props.getDetail(movie.id)} key={movie.id}
                                src={movie.poster} alt={movie.title} />
                        </div>
                    ))}
                </div>
                <div className="movieDetail">
                    <h3>{this.state.movie.title}</h3>
                    <h5>{this.state.movie.description}</h5>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(List);