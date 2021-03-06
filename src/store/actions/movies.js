import * as actionTypes from './actionTypes';

export const changeSearchStr = (searchStr) => ({
  type: actionTypes.CHANGE_SEARCH_STR,
  payload: searchStr,
});

export const fetchMovies = () => ({
  type: actionTypes.FETCH_MOVIES,
});

export const fetchSelectedMovie = (id) => ({
  type: actionTypes.FETCH_SELECTED_MOVIE,
  payload: { id },
});

export const fetchSelectedMovieSuccess = (selectedMovie, movies) => ({
  type: actionTypes.FETCH_SELECTED_MOVIE_SUCCESS,
  payload: { selectedMovie, movies },
});

export const fetchMoviesSuccess = (movies) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

export const changeSortBy = (value) => ({
  type: actionTypes.CHANGE_SORT_BY,
  payload: value,
});

export const changeSearchBy = (value) => ({
  type: actionTypes.CHANGE_SEARCH_BY,
  payload: value,
});
