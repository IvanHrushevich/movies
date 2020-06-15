import { actionTypes } from '../actions/index';

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
      };

    default:
      return state;
  }
};
