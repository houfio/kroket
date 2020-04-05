import { act, renderHook } from '@testing-library/react-hooks';

import { useLock } from '.';

it('should hide overflow on body', () => {
  const { result: { current: [lock] } } = renderHook(() => useLock());

  act(() => {
    lock();
  });

  expect(document.body).toMatchSnapshot();
});

it('should preserve padding', () => {
  const { result: { current: [lock] } } = renderHook(() => useLock());

  document.body.innerHTML = `
    <main></main>
    <div data-kroket-fixed style="padding-right: 1rem"></div>
  `;

  act(() => {
    lock();
  });

  expect(document.body).toMatchSnapshot();
});

it('should restore fixed padding', () => {
  const { result: { current: [lock, unlock] } } = renderHook(() => useLock());

  document.body.innerHTML = `
    <main></main>
    <div data-kroket-fixed style="padding-right: 1rem"></div>
  `;

  act(() => {
    lock();
    unlock();
  });

  expect(document.body).toMatchSnapshot();
});

it('shouldn\'t lock when there are locked children', () => {
  const { result: { current: [lock] } } = renderHook(() => useLock());

  document.body.innerHTML = `
    <main></main>
    <div data-kroket-fixed style="padding-right: 1rem"></div>
  `;

  act(() => {
    lock();
    lock();
  });

  expect(document.body).toMatchSnapshot();
});
