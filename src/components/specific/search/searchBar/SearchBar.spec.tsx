import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { SearchBar } from './SearchBar.tsx';

// Need to mock this to avoid constructing the Client with import.meta.
jest.mock('$components/context/ApiClientContext.tsx', () => ({}));

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
