import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageWrapper } from './PageWrapper.tsx';

describe('Components: Common: PageWrapper', () => {
  it('should render.', () => {
    const { container } = render(<PageWrapper title="t" />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('should render children.', () => {
    render(<PageWrapper title="t">Test</PageWrapper>);
    const container = screen.getByText('Test');
    expect(container).toBeInTheDocument();
  });

  it('should update page title.', () => {
    render(<PageWrapper title="t">Test</PageWrapper>);
    expect(document.title).toBe('t');
  });
});
