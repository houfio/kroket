import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';

import { useStyled } from '.';

it('should add the class name', () => {
  const { result: { current: Component } } = renderHook(() => useStyled('div')`
    background-color: yellow;
  `);

  const { asFragment } = render(
    <Component/>
  );

  expect(asFragment()).toMatchSnapshot();
});

it('should forward props', () => {
  const { result: { current: Component } } = renderHook(() => useStyled('div')``);

  const { asFragment } = render(
    <Component id="test">
      test
    </Component>
  );

  expect(asFragment()).toMatchSnapshot();
});

it('should append the defined classname', () => {
  const { result: { current: Component } } = renderHook(() => useStyled('div')``);

  const { asFragment } = render(
    <Component className="test"/>
  );

  expect(asFragment()).toMatchSnapshot();
});

it('should replace dynamic variables with colors', () => {
  const { result: { current: Component } } = renderHook(() => useStyled('div')`
    background-color: ${'primary'};
  `);

  const { asFragment } = render(
    <Component/>
  );

  expect(asFragment()).toMatchSnapshot();
});

it('should call variable functions', () => {
  const { result: { current: Component } } = renderHook(() => useStyled('div')`
    background-color: ${() => 'yellow'};
  `);

  const { asFragment } = render(
    <Component/>
  );

  expect(asFragment()).toMatchSnapshot();
});
