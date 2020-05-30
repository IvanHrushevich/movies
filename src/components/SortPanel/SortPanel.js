import React from 'react';

import classes from './SortPanel.module.scss';
import { SortController } from '../UI/index';

export const SortPanel = () => (
  <div className={classes.container}>
    <SortController
      label="sort by"
      btn1Label="release date"
      btn2Label="rating"
    />
  </div>
);
