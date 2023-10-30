import React from 'react';
import { render } from '@testing-library/react';
import { ModalCardActions } from './ModalCardActions.tsx';

describe('Components: Common: ModalCardActions', () => {
  it('should render.', () => {
    const { container } = render(<ModalCardActions />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
