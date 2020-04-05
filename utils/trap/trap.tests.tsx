import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';

import { useTrap } from '.';

it('should return markers when enabled', () => {
  const { result: { current: [begin, end] } } = renderHook(() => useTrap({ current: document.body }, true));

  expect(begin).toMatchSnapshot();
  expect(end).toMatchSnapshot();
});

it('should return fragments when disabled', () => {
  const { result: { current: [begin, end] } } = renderHook(() => useTrap({ current: document.body }, false));

  expect(begin).toMatchSnapshot();
  expect(end).toMatchSnapshot();
});
