import React from 'react';

import classes from './NotFound.module.scss';

export const NotFound = () => (
  <div className={classes.container}>
    <div className={classes.message}>
      <p>404.</p>
      <p>Page not found.</p>
    </div>
  </div>
);
