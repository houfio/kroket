import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from '@kroket/spinner';
import { useStyled } from '@kroket/styled';
import * as React from 'react';

type Props = {
  /**
   * Content of the button
   */
  text: string,
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
   * Toggle disabled state
   */
  disabled?: boolean
};

export function Button({ text, onClick, icon, iconOnly = false, loading = false, disabled = false }: Props) {
  const StyledButton = useStyled('button')`
    padding: .5rem .75rem;
    color: white;
    background-color: dodgerblue;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    transition: color .25s ease;
    [loading="true"] {
      color: transparent;
      cursor: default;
    }
  `;

  return (
    <Spinner spinning={loading}>
      <StyledButton onClick={onClick} tabIndex={loading ? -1 : 0} disabled={disabled} data-loading={loading} aria-label={text}>
        {icon && (
          <FontAwesomeIcon icon={icon}/>
        )}
        {(!icon || !iconOnly) && text}
      </StyledButton>
    </Spinner>
  );
}
