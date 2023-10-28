import React from 'react';
import { render } from '@testing-library/react';
import { CreateProductForm } from './CreateProductForm.tsx';
import { Client } from '$services/api/client/Client.ts';

jest.mock('$components/hooks/api.tsx', () => ({
  useApiClient: jest.fn(() => new Client('', '')),
  useMutation: jest.fn()
}));

describe('Components: Specific: Product: CreateProductForm', () => {
  it('should render.', () => {
    const { container } = render(<CreateProductForm />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
