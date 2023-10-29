import React from 'react';
import { render } from '@testing-library/react';
import { FormFieldGroup } from './FormFieldGroup.tsx';

describe('Components: Common: Form: FormFieldGroup', () => {
  it('should render.', () => {
    const { container } = render(<FormFieldGroup />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
