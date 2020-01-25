import { Breakpoint, BREAKPOINTS } from '@kroket/breakpoint';
import { css } from '@kroket/css';
import { ComponentPropsWithoutRef, createElement, ElementType, forwardRef, useMemo } from 'react';

export function useStyled<T extends ElementType>(element: T) {
  return (literals: TemplateStringsArray, ...breakpoints: Breakpoint[]) => {
    let style = '';

    for (let i = 0; i < breakpoints.length; i++) {
      style += literals[i];
      style += `@media (min-width: ${BREAKPOINTS[breakpoints[i]]}rem)`;
    }

    style += literals[literals.length - 1];

    return useMemo(() => forwardRef<unknown, ComponentPropsWithoutRef<T>>((props, ref) => createElement(element, {
      ...props,
      className: css(style),
      ref
    })), [style]);
  };
}
