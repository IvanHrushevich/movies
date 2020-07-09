import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import classes from './MoviePage.module.scss';
import { Logo, MovieInfo } from '../../components/index';
import Content from '../Content/Content';
import { movieActions } from '../../store/index';

const MoviePage = ({ selectedMovie, fetchSelectedMovie }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchSelectedMovie(id);
  }, [fetchSelectedMovie, id]);

  return (
    <>
      <section className={classes.sectionHeader}>
        <Logo />
        <div className={`container-global`}>
          <MovieInfo
            src={selectedMovie.poster_path}
            title={selectedMovie.title}
            vote={selectedMovie.vote_average}
            genre={selectedMovie.genres.join(' ')}
            year={parseInt(selectedMovie.release_date)}
            runtime={selectedMovie.runtime}
            overview={selectedMovie.overview}
          />
        </div>
      </section>
      <Content />
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSelectedMovie: (id) => dispatch(movieActions.fetchSelectedMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
