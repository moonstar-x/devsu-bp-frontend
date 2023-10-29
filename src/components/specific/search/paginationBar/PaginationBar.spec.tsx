import React from 'react';
import { render, screen } from '@testing-library/react';
import { PaginationBar } from './PaginationBar.tsx';

describe('Components: Specific: Search: PaginationBar', () => {
  it('should render.', () => {
    const { container } = render(<PaginationBar resultCount={0} />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('should render the correct text if resultCount is 1.', () => {
    render(<PaginationBar resultCount={1} />);
    const container = screen.getByText('1 Result');
    expect(container).toBeInTheDocument();
  });

  it('should render the correct text if resultCount is 0.', () => {
    render(<PaginationBar resultCount={0} />);
    const container = screen.getByText('0 Results');
    expect(container).toBeInTheDocument();
  });

  it('should render the correct text if resultCount is any other number.', () => {
    render(<PaginationBar resultCount={2} />);
    const container = screen.getByText('2 Results');
    expect(container).toBeInTheDocument();
  });
});
