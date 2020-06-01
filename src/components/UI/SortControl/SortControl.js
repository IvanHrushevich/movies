import React from 'react';

import classes from './SortControl.module.scss';

export const SortControl = ({ title, btn1Label, btn2Label, inputName }) => (
  <div className={classes.container}>
    <span className={classes.title}>{title}</span>

    <input
      className={classes.input}
      type="radio"
      name={inputName}
      id={btn1Label}
    />
    <label className={classes.label} for={btn1Label}>
      {btn1Label}
    </label>

    <input
      className={classes.input}
      type="radio"
      name={inputName}
      id={btn2Label}
    />
    <label className={classes.label} for={btn2Label}>
      {btn2Label}
    </label>
  </div>
);
