import React, { Component } from 'react';

import { Content, Footer, Header } from '../../components/index';

export class App extends Component {
  state = {
    movies: [
      {
        src: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
        id: 'a1',
        title: 'Kill Bill: Vol.2',
        genre: 'Action',
        year: '2004',
      },
      {
        src: 'https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg',
        id: 'a2',
        title: 'Kill Bill: Vol.2',
        genre: 'Action',
        year: '2004',
      },
      {
        src: 'https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg',
        id: 'a3',
        title: 'Kill Bill: Vol.2',
        genre: 'Action',
        year: '2004',
      },
      {
        src: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
        id: 'a4',
        title: 'Kill Bill: Vol.2',
        genre: 'Action',
        year: '2004',
      },
      {
        src: 'https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg',
        id: 'a5',
        title: 'Kill Bill: Vol.2',
        genre: 'Action',
        year: '2004',
      },
      {
        src: 'https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg',
        id: 'a6',
        title: 'Kill Bill: Vol.2',
        genre: 'Action',
        year: '2004',
      },
    ],
  };

  render() {
    return (
      <>
        <Header />
        <Content movies={this.state.movies} />
        <Footer />
      </>
    );
  }
}
