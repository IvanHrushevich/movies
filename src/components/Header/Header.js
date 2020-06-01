import React from 'react';

import classes from './Header.module.scss';
import { SortPanel } from '../SortPanel/SortPanel';
import { Logo, SearchControl, SortControl } from '../UI/index';

export const Header = () => (
  <>
    <section className={classes.sectionHeader}>
      <Logo />
      <div className={`container-global ${classes.searchBlock}`}>
        <p className={classes.title}>FIND YOUR MOVIE</p>
        <div className={classes.searchControl}>
          <SearchControl />
        </div>
        <SortControl
          title="search by"
          btn1Label="title"
          btn2Label="gengre"
          inputName="searchBy"
        />
      </div>
    </section>
    <SortPanel />
  </>
);
