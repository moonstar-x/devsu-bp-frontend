import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button.tsx';

describe('Components: Common: Button', () => {
  it('should render.', () => {
    const { container } = render(<Button />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
