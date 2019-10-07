import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

class Home extends Component {

    // local state to hold movie info to display on DOM
    state = {
        movie: {
            title: '',
            description: ''
        }
    }

    // run on page load
    componentDidMount() {
        this.getMovies();
    }

    // populates page with movie list from redux store
    getMovies = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    // set movie to local state on hover
    hover = (movie) => {
        this.setState({
            movie: {
                title: movie.title,
                description: movie.description
            }
        })
    }

    // navigate to selected movie detail page
    getDetail = (id) => {
        this.props.history.push('/details/' + id)
    }

    render() {
        return (
            <div className="Home" >
                <Router>
                    <h1 className="App-title">Movie Sagas</h1>
                    <div className="Movie-list">
                        {this.props.reduxStore.movies.map(movie => (
                            <div className="cell" key={movie.id}>
                                <img className="cellImage" onMouseOver={() => this.hover(movie)}
                                    onClick={() => this.getDetail(movie.id)} key={movie.id}
                                    src={movie.poster} alt={movie.title} />
                            </div>
                        ))}
                    </div>
                    <div className="Movie-detail">
                        <h3>{this.state.movie.title}</h3>
                        <h5>{this.state.movie.description}</h5>
                    </div>
                </Router>
            </div>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Home);