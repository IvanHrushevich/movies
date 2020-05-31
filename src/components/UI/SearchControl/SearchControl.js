import React from 'react';

import classes from './SearchControl.module.scss';
import { Button } from '../Button/Button';

export const SearchControl = () => (
  <div className={classes.container}>
    <input className={classes.input} placeholder="Search" />
    <button className={classes.button}>search</button>
  </div>
);
