import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';
import { Logo, SearchControl, SortControl } from '../UI/index';

describe('Header', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('should render properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain Logo, SearchControl and SortControl components', () => {
    const component = shallow(<Header />);

    expect(component.find(SearchControl)).toHaveLength(1);
    expect(component.find(SortControl)).toHaveLength(1);
    expect(component.find(Logo)).toHaveLength(1);
  });
});
