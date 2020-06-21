import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const initialState = {
  movies: [],
  searchBy: 'title',
  sortBy: 'release_date',
  searchStr: '',
};

const sagaMiddleware = createSagaMiddleware();
const mockStoreFn = configureStore([sagaMiddleware]);

export const mockStore = mockStoreFn(initialState);
