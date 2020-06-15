import * as actionTypes from './actionTypes';

export const fetchMovies = () => ({
  type: actionTypes.FETCH_MOVIES,
});

export const fetchMoviesSuccess = (movies) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: { movies },
});
