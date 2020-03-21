import { css } from '@kroket/css';
import { Theme, useTheme } from '@kroket/theme';
import { ComponentPropsWithoutRef, createElement, ElementType, forwardRef, useMemo } from 'react';

export function useStyled<T extends ElementType>(element: T) {
  return (literals: TemplateStringsArray, ...colors: (keyof Theme | ((theme: Theme) => string))[]) => {
    const theme = useTheme();

    let style = '';

    for (let i = 0; i < colors.length; i++) {
      style += literals[i];

      const fn = colors[i];
      style += typeof fn === 'function' ? fn(theme) : theme[fn];
    }

    style += literals[literals.length - 1];

    return useMemo(() => forwardRef<unknown, ComponentPropsWithoutRef<T>>((props, ref) => createElement(element, {
      ...props,
      className: `${css(style)}${props.className ? ` ${props.className}` : ''}`,
      ref
    })), [element, style]);
  };
}
