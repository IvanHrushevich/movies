import * as actionTypes from './actionTypes';

export const fetchMoviesSuccess = (movies) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: { movies },
});
