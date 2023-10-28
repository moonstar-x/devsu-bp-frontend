import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { LinkButton } from './LinkButton.tsx';

describe('Components: Common: LinkButton', () => {
  it('should render.', () => {
    const { container } = render(
      <BrowserRouter>
        <LinkButton to="#" />
      </BrowserRouter>
    );
    expect(container).not.toBeEmptyDOMElement();
  });
});
