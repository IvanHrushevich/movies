import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Content from './Content';
import { MovieCard } from '../../components/index';
import { mockStore } from '../../test-utils/index';

describe('Content', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore;

    component = mount(
      <Provider store={store}>
        <Content />
      </Provider>
    );
  });

  it('should render properly', () => {
    expect(component).toMatchSnapshot();
  });

  // it('should contain proper number of MovieCard components', () => {
  //   const fakeMovies = [
  //     {
  //       src: 'src1',
  //       title: 'title1',
  //       genre: 'genre1',
  //       year: 'year1',
  //       id: 'id1',
  //     },
  //     {
  //       src: 'src2',
  //       title: 'title2',
  //       genre: 'genre2',
  //       year: 'year2',
  //       id: 'id2',
  //     },
  //   ];

  //   component.setProps({ movies: fakeMovies });
  //   expect(component.find(MovieCard)).toHaveLength(2);
  // });
});
