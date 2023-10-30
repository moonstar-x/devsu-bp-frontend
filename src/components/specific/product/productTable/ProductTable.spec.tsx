import React from 'react';
import { render } from '@testing-library/react';
import { ProductTable } from './ProductTable.tsx';

// Need to mock this to avoid constructing the Client with import.meta.
jest.mock('$components/context/ApiClientContext.tsx', () => ({}));

describe('Components: Specific: Product: ProductTable', () => {
  it('should render.', () => {
    const { container } = render(<ProductTable products={[]} />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
