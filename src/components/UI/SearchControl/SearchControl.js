import React from 'react';

import classes from './SearchControl.module.scss';
import { Button } from '../Button/Button';

export const SearchControl = () => (
  <div className={classes.container}>
    <input placeholder="Search" />
    <Button>Search</Button>
  </div>
);
