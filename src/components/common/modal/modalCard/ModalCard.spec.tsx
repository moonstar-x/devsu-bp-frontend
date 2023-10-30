import React from 'react';
import { render } from '@testing-library/react';
import { ModalCard } from './ModalCard.tsx';

describe('Components: Common: ModalCard', () => {
  it('should render.', () => {
    const { container } = render(<ModalCard />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
