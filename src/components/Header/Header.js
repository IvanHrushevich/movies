import React from 'react';

import classes from './Header.module.scss';
import { SortPanel } from '../SortPanel/SortPanel';
import { Logo, SearchControl, SortControl } from '../UI/index';

export const Header = () => (
  <>
    <div className={classes.container}>
      <Logo />
      <div className={classes.searchBlock}>
        <p className={classes.title}>FIND YOUR MOVIE</p>
        <SearchControl />
        <SortControl label="search by" btn1Label="title" btn2Label="gengre" />
      </div>
    </div>
    <div className={classes.sortPanel}>
      <SortPanel />
    </div>
  </>
);
