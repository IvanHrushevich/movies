import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import App from './App';
import Header from '../Header/Header';
import { mockStore } from '../../test-utils/index';

describe('App', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore;

    component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should render properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render properly', () => {
    expect(component.find(Header)).toHaveLength(1);
  });
});
