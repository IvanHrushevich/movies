import React from 'react';
import PropTypes from 'prop-types';

import classes from './SortControl.module.scss';

export const SortControl = ({ title, btn1, btn2, inputName, onChange }) => (
  <div className={classes.container}>
    <span className={classes.title}>{title}</span>

    <input
      className={classes.input}
      type="radio"
      name={inputName}
      value={btn1.value}
      id={btn1.label}
      defaultChecked={btn1.checked}
      onChange={onChange}
    />
    <label className={classes.label} htmlFor={btn1.label}>
      {btn1.label}
    </label>

    <input
      className={classes.input}
      type="radio"
      name={inputName}
      value={btn2.value}
      id={btn2.label}
      defaultChecked={btn2.checked}
      onChange={onChange}
    />
    <label className={classes.label} htmlFor={btn2.label}>
      {btn2.label}
    </label>
  </div>
);

SortControl.propTypes = {
  title: PropTypes.string,
  btn1Label: PropTypes.string,
  btn2Label: PropTypes.string,
  inputName: PropTypes.string,
};
