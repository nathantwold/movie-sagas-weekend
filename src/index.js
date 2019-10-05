import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_DETAIL', getDetail);
    yield takeEvery('UPDATE_MOVIE', updateMovie);
}

function* getMovies() {
    try {
        const response = yield axios.get('/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log('error in GET', error);
    }
}

function* getDetail(action) {
    try {
        const response = yield axios.get('/movies/' + action.payload.id)
        yield put({ type: 'SET_DETAIL', payload: response.data });
    } catch (error) {
        console.log('error in getDetail', error);
    }
}

function* updateMovie(action) {
    try {
        console.log(action.payload);
        let movie = action.payload;
        yield axios.put('/movies', movie)
        } catch (error) {
            console.log('error in update', error);
        }
    }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

    // Used to store movies returned from the server
    const movies = (state = [], action) => {
        switch (action.type) {
            case 'SET_MOVIES':
                return action.payload;
            default:
                return state;
        }
    }

    // Used to store the movie genres
    const detail = (state = [], action) => {
        switch (action.type) {
            case 'SET_DETAIL':
                return action.payload;
            default:
                return state;
        }
    }

    // Create one store that all components can use
    const storeInstance = createStore(
        combineReducers({
            movies,
            detail,
        }),
        // Add sagaMiddleware to our store
        applyMiddleware(sagaMiddleware, logger),
    );

    // Pass rootSaga into our sagaMiddleware
    sagaMiddleware.run(rootSaga);

    ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
        document.getElementById('root'));
    registerServiceWorker();
