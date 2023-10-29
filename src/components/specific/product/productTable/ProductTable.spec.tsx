import React from 'react';
import { render } from '@testing-library/react';
import { ProductTable } from './ProductTable.tsx';

describe('Components: Specific: Product: ProductTable', () => {
  it('should render.', () => {
    const { container } = render(<ProductTable products={[]} />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
