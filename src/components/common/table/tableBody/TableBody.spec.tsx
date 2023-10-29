import React from 'react';
import { render } from '@testing-library/react';
import { TableBody } from './TableBody.tsx';

describe('Components: Common: TableBody', () => {
  it('should render.', () => {
    const { container } = render(<TableBody />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
