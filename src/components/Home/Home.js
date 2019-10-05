import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

// import List from '../List/List.js';

class Home extends Component {

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
    getDetail = (id) => {
        this.props.history.push('/details/' + id)
    }

    render() {
        return (
            <div className="Home" >
                <Router>
                    <h1 className="App-title">Movie Sagas</h1>
                    {/* <List getDetail={this.getDetail} /> */}
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