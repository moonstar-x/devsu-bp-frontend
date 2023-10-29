import React from 'react';
import { render } from '@testing-library/react';
import { FormBox } from './FormBox.tsx';

describe('Components: Common: Form: FormBox', () => {
  it('should render.', () => {
    const { container } = render(<FormBox />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
