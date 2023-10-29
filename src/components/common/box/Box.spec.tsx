import React from 'react';
import { render } from '@testing-library/react';
import { Box } from './Box.tsx';

describe('Components: Common: Box', () => {
  it('should render.', () => {
    const { container } = render(<Box />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
