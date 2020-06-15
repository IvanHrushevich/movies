import { put } from 'redux-saga/effects';

import { movieActions } from '../actions/index';

const baseUrl = 'http://reactjs-cdp.herokuapp.com';

export function* fetchMovies() {
  try {
    const response = yield fetch(`${baseUrl}/movies`);
    const fetchedData = yield response.json();
    const movies = yield fetchedData.data;

    yield put(movieActions.fetchMoviesSuccess(movies));
  } catch (error) {
    console.error('error', error);
  }
}
