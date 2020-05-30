import React from 'react';

import classes from './Button.module.scss';

export const Button = (props) => (
  <button
    className={`${classes.button} ${classes[props.btnType]}`}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
