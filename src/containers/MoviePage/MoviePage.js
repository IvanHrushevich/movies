import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import classes from './MoviePage.module.scss';
import { Logo } from '../../components/index';
import Content from '../Content/Content';
import { movieActions } from '../../store/index';

const MoviePage = ({ selectedMovie, fetchSelectedMovie }) => {
  console.log(1);
  const { id } = useParams();

  useEffect(() => {
    fetchSelectedMovie(id);
  }, [fetchSelectedMovie]);

  return (
    <>
      <section className={classes.sectionHeader}>
        <Logo />
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
