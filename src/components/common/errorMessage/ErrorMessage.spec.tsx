import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage.tsx';

describe('Components: Common: ErrorMessage', () => {
  it('should not render if no error was provided.', () => {
    const { container } = render(<ErrorMessage />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render if error was provided.', () => {
    const { container } = render(<ErrorMessage error={new Error('Oops')} />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('should render the error text from Error object.', () => {
    render(<ErrorMessage error={new Error('Oops')} />);
    const container = screen.getByText('Oops');
    expect(container).toBeInTheDocument();
  });
});
