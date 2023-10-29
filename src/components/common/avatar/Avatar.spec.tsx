import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar.tsx';

describe('Components: Common: Avatar', () => {
  it('should render.', () => {
    const { container } = render(<Avatar />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
