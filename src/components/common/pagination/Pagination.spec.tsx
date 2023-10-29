import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination.tsx';

describe('Components: Common: Pagination', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockReset();
  });

  it('should render.', () => {
    const { container } = render(<Pagination page={1} maxPage={1} />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('should render first and previous buttons as disabled if on first page.', () => {
    render(<Pagination page={1} maxPage={5} onChange={handleChange} />);
    const buttonFirst = screen.getByTestId('btn-first');
    const buttonPrevious = screen.getByTestId('btn-previous');

    expect(buttonFirst).toBeDisabled();
    expect(buttonPrevious).toBeDisabled();
  });

  it('should render last and next buttons as disabled if on last page.', () => {
    render(<Pagination page={5} maxPage={5} onChange={handleChange} />);
    const buttonLast = screen.getByTestId('btn-last');
    const buttonNext = screen.getByTestId('btn-next');

    expect(buttonLast).toBeDisabled();
    expect(buttonNext).toBeDisabled();
  });

  it('should call onChange with the appropriate page when first button is clicked.', () => {
    render(<Pagination page={3} maxPage={5} onChange={handleChange} />);
    const button = screen.getByTestId('btn-first');
    button.click();

    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('should call onChange with the appropriate page when previous button is clicked.', () => {
    render(<Pagination page={3} maxPage={5} onChange={handleChange} />);
    const button = screen.getByTestId('btn-previous');
    button.click();

    expect(handleChange).toHaveBeenCalledWith(2);
  });

  it('should call onChange with the appropriate page when next button is clicked.', () => {
    render(<Pagination page={3} maxPage={5} onChange={handleChange} />);
    const button = screen.getByTestId('btn-next');
    button.click();

    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('should call onChange with the appropriate page when last button is clicked.', () => {
    render(<Pagination page={3} maxPage={5} onChange={handleChange} />);
    const button = screen.getByTestId('btn-last');
    button.click();

    expect(handleChange).toHaveBeenCalledWith(5);
  });
});
