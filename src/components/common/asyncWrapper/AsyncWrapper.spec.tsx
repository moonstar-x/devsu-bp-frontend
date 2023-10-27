import React from 'react';
import { render, screen } from '@testing-library/react';
import { AsyncWrapper } from './AsyncWrapper.tsx';

describe('Components: Common: AsyncWrapper', () => {
  it('should render loading component if loading is true.', () => {
    const { container } = render(<AsyncWrapper loading />);
    expect(container).toContainHTML('span');
  });

  it('should render error if error is an error object.', () => {
    render(<AsyncWrapper error={new Error('Oops')} />);
    const container = screen.getByText('Oops');
    expect(container).toBeInTheDocument();
  });

  it('should render error if error is a string.', () => {
    render(<AsyncWrapper error="Oops" />);
    const container = screen.getByText('Oops');
    expect(container).toBeInTheDocument();
  });

  it('should render children if not loading or no error.', () => {
    render(<AsyncWrapper>Test</AsyncWrapper>);
    const container = screen.getByText('Test');
    expect(container).toBeInTheDocument();
  });
});
