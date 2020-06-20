import React from 'react';
import { connect } from 'react-redux';

import classes from './SortPanel.module.scss';
import { SortControl } from '../../components/index';
import { movieActions } from '../../store/index';

const SortPanel = (props) => (
  <section className={classes.section}>
    <div className={`container-global ${classes.panelContainer}`}>
      <SortControl
        title="sort by"
        btn1={{
          label: 'release date',
          value: 'release_date',
          checked: true,
        }}
        btn2={{
          label: 'rating',
          value: 'vote_average',
        }}
        inputName="sortBy"
        onChange={(event) => {
          props.changeSortBy(event.target.value);
          props.fetchMovies();
        }}
      />
    </div>
  </section>
);

const mapDispatchToProps = (dispatch) => ({
  changeSortBy: (value) => dispatch(movieActions.changeSortBy(value)),
  fetchMovies: () => dispatch(movieActions.fetchMovies()),
});

export default connect(null, mapDispatchToProps)(SortPanel);
