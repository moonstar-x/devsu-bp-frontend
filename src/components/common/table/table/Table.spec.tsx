import React from 'react';
import { render } from '@testing-library/react';
import { Table } from './Table.tsx';

describe('Components: Common: Table', () => {
  it('should render.', () => {
    const { container } = render(<Table />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
