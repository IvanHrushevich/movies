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
          value: 'releaseDate',
          checked: true,
        }}
        btn2={{
          label: 'rating',
          value: 'rating',
        }}
        inputName="sortBy"
        onChange={(event) => props.changeSortBy(event.target.value)}
      />
    </div>
  </section>
);

const mapDispatchToProps = (dispatch) => ({
  changeSortBy: (value) => dispatch(movieActions.changeSortBy(value)),
});

export default connect(null, mapDispatchToProps)(SortPanel);
