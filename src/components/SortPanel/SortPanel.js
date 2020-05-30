import React from 'react';

import classes from './SortPanel.module.scss';
import { SortControl } from '../UI/index';

export const SortPanel = () => (
  <div className={classes.container}>
    <SortControl label="sort by" btn1Label="release date" btn2Label="rating" />
  </div>
);
