import React from 'react';
import { render } from '@testing-library/react';
import { ModalCardBody } from './ModalCardBody.tsx';

describe('Components: Common: ModalCardBody', () => {
  it('should render.', () => {
    const { container } = render(<ModalCardBody />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
