import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useKey } from '.';

it('should invoke the key listener', () => {
  const fn = jest.fn();

  renderHook(() => useKey('Enter', fn, []));
  fireEvent.keyDown(document, { key: 'Enter' });

  expect(fn).toHaveBeenCalled();
});

it('shouldn\'t invoke the key listener with the wrong key', () => {
  const fn = jest.fn();

  renderHook(() => useKey('Space', fn, []));
  fireEvent.keyDown(document, { key: 'Enter' });

  expect(fn).not.toHaveBeenCalled();
});
