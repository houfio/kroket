import { useStyled } from '@kroket/styled';
import * as React from 'react';

type Props = {};

export function Button({}: Props) {
  const Component = useStyled('button')`
    background-color: yellow;
  `;

  return (
    <Component>
      Hoi
    </Component>
  );
}
