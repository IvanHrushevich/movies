import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { Footer, NotFound } from '../../components/index';
import { ErrorBoundary } from '../../hoc/index';
import { movieActions } from '../../store/index';
import Content from '../Content/Content';
import Header from '../Header/Header';
import MoviePage from '../MoviePage/MoviePage';

const App = ({ fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Content />
        </Route>
        <Route path="/film/:id">
          <MoviePage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(movieActions.fetchMovies()),
});

export default connect(null, mapDispatchToProps)(App);
