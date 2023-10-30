import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { LogoHeader } from './LogoHeader.tsx';

// Need to mock this to avoid constructing the Client with import.meta.
jest.mock('$components/context/ApiClientContext.tsx', () => ({}));

describe('Components: Common: LogoHeader', () => {
  it('should render.', () => {
    const { container } = render(
      <BrowserRouter>
        <LogoHeader />
      </BrowserRouter>
    );
    expect(container).not.toBeEmptyDOMElement();
  });
});
