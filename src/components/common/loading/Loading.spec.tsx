import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from './Loading';

describe('Components: Common: Loading', () => {
  it('should render.', () => {
    const { container } = render(<Loading />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
