import * as React from 'react';
import { render } from '@testing-library/react';
import { Loading } from './Loading';

describe('Components: Common: Loading', () => {
  it('should render.', () => {
    render(<Loading />);
  });
});
