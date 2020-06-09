import React from 'react';
import { shallow } from 'enzyme';

import { Content } from './Content';
import { MovieCard } from '../MovieCard/MovieCard';

describe('Content', () => {
  it('should render properly', () => {
    const component = shallow(<Content movies={[]} />);

    expect(component).toMatchSnapshot();
  });

  it('should contain proper number of MovieCard components', () => {
    const fakeMovies = [
      {
        src: 'src1',
        title: 'title1',
        genre: 'genre1',
        year: 'year1',
        id: 'id1',
      },
      {
        src: 'src2',
        title: 'title2',
        genre: 'genre2',
        year: 'year2',
        id: 'id2',
      },
    ];

    const component = shallow(<Content movies={fakeMovies} />);
    expect(component.find(MovieCard)).toHaveLength(2);
  });
});
