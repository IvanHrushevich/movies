import React from 'react';

import classes from './SortController.module.scss';
import { Button } from '../Button/Button';

export const SortController = (props) => (
  <div className={classes.container}>
    <span className={classes.label}>{props.label.toUpperCase()}</span>
    <Button>{props.btn1Label.toUpperCase()}</Button>
    <Button>{props.btn2Label.toUpperCase()}</Button>
  </div>
);
