import React from 'react';
import { render } from '@testing-library/react';
import { LogoHeader } from './LogoHeader.tsx';

describe('Components: Common: LogoHeader', () => {
  it('should render.', () => {
    const { container } = render(<LogoHeader />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
