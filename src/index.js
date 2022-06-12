import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRE', fetchGenre);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

function* fetchGenre(action) {
    console.log('fetch genre id', action.payload);
    try {
        console.log("in the fetch genre saga:", action.payload)
        const response = yield axios.post("/api/genre",  action.payload)
        console.log("fetch genre response: ", response);
        yield put({ type: 'SELECT_GENRE', payload: response.data })

    } catch {
        console.error(`error fetching genres`);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const selected = (state = "", action) => {
    console.log("sel red -----", action);
    switch (action.type) {
        case 'SELECT':
            console.log("what i want ----");
            return action.payload;
        default:
            return state;
    }
}

const selectedGenre = (state = "", action) => {
    console.log("sel red -----", action);
    switch (action.type) {
        case 'SELECT_GENRE':
            console.log("what i want ----");
            return action.payload;
        default:
            return state;
    }
}

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
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selected,
        selectedGenre,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
