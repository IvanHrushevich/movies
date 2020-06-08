import React from 'react';
import { shallow } from 'enzyme';

import { Content } from './Content';

describe('Content', () => {
  it('should render properly', () => {
    const component = shallow(<Content movies={[]} />);

    expect(component).toMatchSnapshot();
  });
});
