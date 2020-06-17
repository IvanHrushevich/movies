import React from 'react';
import { connect } from 'react-redux';

import classes from './Header.module.scss';
import SortPanel from '../SortPanel/SortPanel';
import { Logo, SearchControl, SortControl } from '../UI/index';
import { movieActions } from '../../store/index';

export const Header = (props) => (
  <>
    <header className={classes.sectionHeader}>
      <Logo />
      <div className={`container-global ${classes.searchBlock}`}>
        <p className={classes.title}>FIND YOUR MOVIE</p>
        <div className={classes.searchControl}>
          <SearchControl />
        </div>
        <SortControl
          title="search by"
          btn1={{
            label: 'title',
            value: 'title',
            checked: true,
          }}
          btn2={{
            label: 'genre',
            value: 'genre',
          }}
          inputName="searchBy"
          onChange={(event) => props.changeSearchBy(event.target.value)}
        />
      </div>
    </header>
    <SortPanel />
  </>
);

const mapDispatchToProps = (dispatch) => ({
  changeSearchBy: (value) => dispatch(movieActions.changeSearchBy(value)),
});

export default connect(null, mapDispatchToProps)(Header);
