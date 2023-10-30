import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from './Modal.tsx';

describe('Components: Common: Modal', () => {
  it('should render.', () => {
    const { container } = render(<Modal />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
