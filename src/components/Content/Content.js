import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './Content.module.scss';
import { MovieCard } from '../MovieCard/MovieCard';

const Content = ({ movies }) => {
  const movieCards = movies.map((movie) => (
    <MovieCard
      src={movie.poster_path}
      title={movie.title}
      genre={movie.genre}
      year={movie.year}
      key={movie.id}
    />
  ));

  return (
    <main className={classes.section}>
      <div className={classes.cardsWrapper}>{movieCards}</div>
    </main>
  );
};

Content.propTypes = {
  movies: PropTypes.array,
};

const mapStateToProps = (state) => ({ movies: state.movies });

export default connect(mapStateToProps)(Content);
