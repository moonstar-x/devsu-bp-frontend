import React from 'react';
import { render } from '@testing-library/react';
import { EditProductForm } from './EditProductForm.tsx';
import { Client } from '$services/api/client/Client.ts';
import { ProductModel } from '$services/api/models/product.ts';

jest.mock('$components/hooks/api.tsx', () => ({
  useApiClient: jest.fn(() => new Client('', '')),
  useMutation: jest.fn()
}));

describe('Components: Specific: Product: EditProductForm', () => {
  const product = { dateRelease: new Date(), dateRevision: new Date() } as ProductModel;

  it('should render.', () => {
    const { container } = render(<EditProductForm product={product} />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
