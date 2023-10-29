import React from 'react';
import { render } from '@testing-library/react';
import { Form } from './Form.tsx';

describe('Components: Common: Form: Form', () => {
  it('should render.', () => {
    const { container } = render(<Form />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
