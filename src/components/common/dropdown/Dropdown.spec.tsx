import React from 'react';
import { render } from '@testing-library/react';
import { Dropdown } from './Dropdown.tsx';

describe('Components: Common: Dropdown', () => {
  it('should render.', () => {
    const { container } = render(<Dropdown />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
