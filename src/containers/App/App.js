import React, { Component } from 'react';

import { Content, Footer, Header } from '../../components/index';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}
