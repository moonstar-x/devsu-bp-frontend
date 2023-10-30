import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { PageWrapper } from './PageWrapper.tsx';

// Need to mock this to avoid constructing the Client with import.meta.
jest.mock('$components/context/ApiClientContext.tsx', () => ({}));

describe('Components: Common: PageWrapper', () => {
  it('should render.', () => {
    const { container } = render(
      <BrowserRouter>
        <PageWrapper title="t" />
      </BrowserRouter>
    );
    expect(container).not.toBeEmptyDOMElement();
  });

  it('should render children.', () => {
    render(
      <BrowserRouter>
        <PageWrapper title="t">Test</PageWrapper>
      </BrowserRouter>
    );
    const container = screen.getByText('Test');
    expect(container).toBeInTheDocument();
  });

  it('should update page title.', () => {
    render(
      <BrowserRouter>
        <PageWrapper title="t">Test</PageWrapper>
      </BrowserRouter>
    );
    expect(document.title).toBe('t');
  });
});
