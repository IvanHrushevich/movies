import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Footer, NotFound, SearchPage } from '../../components/index';
import { ErrorBoundary } from '../../hoc/index';
import { movieActions } from '../../store/index';
import MoviePage from '../MoviePage/MoviePage';

const App = ({ changeSearchStr, fetchMovies }) => {
  const searchMovie = (searchStr) => {
    changeSearchStr(searchStr);
    fetchMovies();
  };

  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" exact>
          <SearchPage />
        </Route>
        <Route path="/film/:id">
          <MoviePage />
        </Route>
        <Route path="/search/:searchStr">
          <SearchPage searchMovie={searchMovie} />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(movieActions.fetchMovies()),
  changeSearchStr: (value) => dispatch(movieActions.changeSearchStr(value)),
});

export default connect(null, mapDispatchToProps)(App);
