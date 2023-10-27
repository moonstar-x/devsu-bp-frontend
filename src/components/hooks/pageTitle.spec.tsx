import { renderHook } from '@testing-library/react';
import { usePageTitle } from './pageTitle.tsx';

describe('Components: Hooks: usePageTitle', () => {
  it('should update document title.', () => {
    renderHook(() => usePageTitle('test'));
    expect(document.title).toBe('test');
  });
});
