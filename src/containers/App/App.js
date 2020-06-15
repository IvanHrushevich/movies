import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Content, Footer, Header } from '../../components/index';
import { ErrorBoundary } from '../../hoc/index';
import { movieActions } from '../../store/index';

const App = ({ fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <ErrorBoundary>
      <Header />
      <Content />
      <Footer />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(movieActions.fetchMovies()),
});

export default connect(null, mapDispatchToProps)(App);
