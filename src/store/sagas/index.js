import { takeLatest } from 'redux-saga/effects';

import { fetchMovies } from './movies';
import { actionTypes } from '../actions/index';

export function* watchMovies() {
  yield takeLatest(actionTypes.FETCH_MOVIES, fetchMovies);
}
