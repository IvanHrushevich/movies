import React, { useState, useEffect } from 'react';

import { Content, Footer, Header } from '../../components/index';
import { ErrorBoundary } from '../../hoc/index';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://reactjs-cdp.herokuapp.com/movies');
      const fetchedData = await response.json();

      setMovies(fetchedData.data);
    })();
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <Content movies={movies} />
      <Footer />
    </ErrorBoundary>
  );
};
