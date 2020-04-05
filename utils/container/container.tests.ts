import { renderHook } from '@testing-library/react-hooks';

import { useContainer } from '.';

it('should create a container if it doesn\'t exist', () => {
  const { result: { current } } = renderHook(() => useContainer('test'));

  expect(document.body).toMatchSnapshot();
  expect(current).toMatchSnapshot();
});

it('should return the container if it exists', () => {
  document.body.innerHTML = `
    <div id="test"></div>
  `;

  const { result: { current } } = renderHook(() => useContainer('test'));

  expect(document.body).toMatchSnapshot();
  expect(current).toMatchSnapshot();
});
