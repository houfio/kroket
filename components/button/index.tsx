import { useStyled } from '@kroket/styled';
import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
  /**
   * Content of the button
   */
  text: ReactNode,
  /**
   * Event called on every button click
   */
  onClick?: () => void
};

export function Button({ text, onClick }: Props) {
  const Component = useStyled('button')`
    background-color: yellow;
  `;

  return (
    <Component onClick={onClick}>
      {text}
    </Component>
  );
}
