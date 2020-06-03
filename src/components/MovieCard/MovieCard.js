import React from 'react';
import PropTypes from 'prop-types';

import classes from './MovieCard.module.scss';

export const MovieCard = ({ src, title, genre, year }) => (
  <a className={classes.container} href="/">
    <img className={classes.pic} src={src}></img>
    <div className={classes.info}>
      <div>
        <p className={classes.title}>{title}</p>
        <p className={classes.genre}>{genre}</p>
      </div>
      <span className={classes.year}>{year}</span>
    </div>
  </a>
);

MovieCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
};
