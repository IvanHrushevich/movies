import React from 'react';

import classes from './Footer.module.scss';
import { Logo } from '../UI/index';

export const Footer = () => (
  <section className={classes.section}>
    <Logo />
  </section>
);
