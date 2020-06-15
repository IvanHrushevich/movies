import React from 'react';
import { mount } from 'enzyme';

import { ErrorBoundary } from './ErrorBoundary';

const Content = () => null;

describe('ErrorBoundary', () => {
  const errorElement = (
    <h1 style={{ color: 'black', margin: 'auto' }}>Something went wrong.</h1>
  );

  let component;

  beforeEach(() => {
    component = mount(
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
    );
  });

  it('should render error message if wrapped component throws error', () => {
    const error = new Error('test');

    component.find(Content).simulateError(error);

    expect(component.contains(errorElement)).toEqual(true);
  });

  it('should render wrapped component if no errors occurred', () => {
    expect(component.contains(errorElement)).toEqual(false);
    expect(component.contains(<Content />)).toEqual(true);
  });
});
