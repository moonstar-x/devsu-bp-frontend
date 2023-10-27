import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from './Logo.tsx';

describe('Components: Common: Logo', () => {
  it('should render.', () => {
    const { container } = render(<Logo />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
