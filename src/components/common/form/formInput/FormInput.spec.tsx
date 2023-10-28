import React from 'react';
import { render } from '@testing-library/react';
import { FormInput } from './FormInput.tsx';

describe('Components: Form: FormInput', () => {
  it('should render.', () => {
    const { container } = render(<FormInput />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
