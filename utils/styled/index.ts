import { css } from '@kroket/css';
import { ClassAttributes, createElement, forwardRef, useMemo } from 'react';

type ElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] extends ClassAttributes<infer A> ? A : never;

export function useStyled<T extends keyof JSX.IntrinsicElements>(element: T) {
  return (literals: TemplateStringsArray, ...extra: unknown[]) => {
    return useMemo(() => {
      const style = extra.reduce<string>((previous, current, index) => previous + literals[index] + current, '');

      return forwardRef<ElementProps<T>, JSX.IntrinsicElements[T]>((props, ref) => createElement(element, {
        ...props,
        className: css(style),
        ref
      }));
    }, [...literals, ...extra]);
  };
}
