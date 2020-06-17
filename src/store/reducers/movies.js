import { actionTypes } from '../actions/index';

const initialState = {
  movies: [],
  seacrhBy: 'title',
  sortBy: 'releaseDate',
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
      };

    case actionTypes.CHANGE_SEARCH_BY:
      return {
        ...state,
        seacrhBy: action.payload,
      };

    case actionTypes.CHANGE_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};
