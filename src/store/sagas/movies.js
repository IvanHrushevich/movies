import { put, select } from 'redux-saga/effects';

import { movieActions } from '../actions/index';

const baseUrl = 'http://reactjs-cdp.herokuapp.com';

export function* fetchMovies() {
  const state = yield select();

  let queries = `?sortBy=${state.sortBy}&sortOrder=desc`;
  if (state.searchStr) {
    queries += `&searchBy=${state.searchBy}&search=${state.searchStr}`;
  }

  try {
    const response = yield fetch(`${baseUrl}/movies${queries}`);
    const fetchedData = yield response.json();
    const movies = yield fetchedData.data;

    yield put(movieActions.fetchMoviesSuccess(movies));
  } catch (error) {
    console.error('error', error);
  }
}
