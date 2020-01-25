import { css } from '@kroket/css';
import { ClassAttributes, createElement, forwardRef, useMemo } from 'react';

type ElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] extends ClassAttributes<infer A> ? A : never;

export function useStyled<T extends keyof JSX.IntrinsicElements>(element: T) {
  return (literals: TemplateStringsArray, ...extra: unknown[]) => {
    return useMemo(() => {
      let style = '';

      for (let i = 0; i < extra.length; i++) {
        style += literals[i];
        style += extra[i];
      }

      style += literals[literals.length - 1];

      return forwardRef<ElementProps<T>, JSX.IntrinsicElements[T]>((props, ref) => createElement(element, {
        ...props,
        className: css(style),
        ref
      }));
    }, [...literals, ...extra]);
  };
}
