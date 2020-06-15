import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Content, Footer, Header } from '../../components/index';
import { ErrorBoundary } from '../../hoc/index';
import { fetchMoviesSuccess } from '../../store/index';

const App = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://reactjs-cdp.herokuapp.com/movies');
      const fetchedData = await response.json();

      props.fetchMovies(fetchedData.data);
    })();
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <Content />
      <Footer />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (movies) => dispatch(fetchMoviesSuccess(movies)),
});

export default connect(null, mapDispatchToProps)(App);
