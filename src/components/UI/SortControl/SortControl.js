import React from 'react';

import classes from './SortControl.module.scss';
import { Button } from '../Button/Button';

export const SortControl = (props) => (
  <div className={classes.container}>
    <span className={classes.label}>{props.label.toUpperCase()}</span>
    <Button>{props.btn1Label.toUpperCase()}</Button>
    <Button>{props.btn2Label.toUpperCase()}</Button>
  </div>
);
