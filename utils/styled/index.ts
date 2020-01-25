import { Breakpoint, BREAKPOINTS } from '@kroket/breakpoint';
import { css } from '@kroket/css';
import { ClassAttributes, createElement, forwardRef, useMemo } from 'react';

type ElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] extends ClassAttributes<infer A> ? A : never;

export function useStyled<T extends keyof JSX.IntrinsicElements>(element: T) {
  return (literals: TemplateStringsArray, ...breakpoints: Breakpoint[]) => {
    let style = '';

    for (let i = 0; i < breakpoints.length; i++) {
      style += literals[i];
      style += `@media (min-width: ${BREAKPOINTS[breakpoints[i]]}rem)`;
    }

    style += literals[literals.length - 1];

    return useMemo(() => forwardRef<ElementProps<T>, JSX.IntrinsicElements[T]>((props, ref) => createElement(element, {
      ...props,
      className: css(style),
      ref
    })), [style]);
  };
}
