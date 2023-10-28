import React from 'react';
import { render } from '@testing-library/react';
import { FormActions } from './FormActions.tsx';

describe('Components: Form: FormActions', () => {
  it('should render.', () => {
    const { container } = render(<FormActions />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
