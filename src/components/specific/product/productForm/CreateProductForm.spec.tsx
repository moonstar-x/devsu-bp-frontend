import React from 'react';
import { render } from '@testing-library/react';
import { CreateProductForm } from './CreateProductForm.tsx';

describe('Components: Specific: Product: CreateProductForm', () => {
  it('should render.', () => {
    const { container } = render(<CreateProductForm />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
