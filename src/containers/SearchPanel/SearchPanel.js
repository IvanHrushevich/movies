import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './SearchPanel.module.scss';
import SortPanel from '../SortPanel/SortPanel';
import { Logo, SearchControl, SortControl } from '../../components/index';
import { movieActions } from '../../store/index';

const SearchPanel = (props) => (
  <>
    <header className={classes.sectionHeader}>
      <Logo />
      <div className={`container-global ${classes.searchBlock}`}>
        <p className={classes.title}>FIND YOUR MOVIE</p>
        <div className={classes.searchControl}>
          <SearchControl
            onSearchClick={(searchStr) => {
              props.history.push(`/search/${searchStr}`);
            }}
          />
        </div>
        <SortControl
          title="search by"
          btnLeft={{
            label: 'title',
            value: 'title',
            checked: true,
          }}
          btnRight={{
            label: 'genre',
            value: 'genres',
          }}
          inputName="searchBy"
          onChange={(event) => {
            props.changeSearchBy(event.target.value);
          }}
        />
      </div>
    </header>
    <SortPanel />
  </>
);

const mapDispatchToProps = (dispatch) => ({
  changeSearchBy: (value) => dispatch(movieActions.changeSearchBy(value)),
});

export default connect(null, mapDispatchToProps)(withRouter(SearchPanel));
