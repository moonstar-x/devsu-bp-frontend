import React from 'react';
import { render } from '@testing-library/react';
import { TableHead } from './TableHead.tsx';

describe('Components: Common: TableHead', () => {
  it('should render.', () => {
    const { container } = render(<TableHead />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
