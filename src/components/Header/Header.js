import React from 'react';

import classes from './Header.module.scss';
import { SortPanel } from '../SortPanel/SortPanel';

export const Header = () => (
  <div className={classes.container}>
    <SortPanel />
  </div>
);
