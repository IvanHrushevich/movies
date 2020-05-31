import React from 'react';

import classes from './Content.module.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const Content = ({ movies }) => {
  const movieCards = movies.map((movie) => (
    <MovieCard
      src={movie.src}
      title={movie.title}
      genre={movie.genre}
      year={movie.year}
      key={movie.id}
    />
  ));

  return <div className={classes.container}>{movieCards}</div>;
};
