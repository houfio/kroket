import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
  onClick?: () => void,
  /**
   * Icon displayed in the button
   */
  icon?: IconProp,
  /**
   * Only display icon
   */
  iconOnly?: boolean,
  /**
   * Toggle button loading state, automatically disables the button
   */
  loading?: boolean,
  /**
   * Toggle disabled state in button
   */
  disabled?: boolean
};

export function Button({ text, onClick, icon, iconOnly = true, loading = false, disabled = false }: Props) {
  const Component = useStyled('button')`
    background-color: yellow;
  `;

  return (
    <Component onClick={onClick}>
      {text}
    </Component>
  );
}
