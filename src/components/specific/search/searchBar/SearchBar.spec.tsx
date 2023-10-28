import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { SearchBar } from './SearchBar.tsx';

describe('Components: Specific: Search: SearchBar', () => {
  it('should render.', () => {
    const { container } = render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    expect(container).not.toBeEmptyDOMElement();
  });
});
