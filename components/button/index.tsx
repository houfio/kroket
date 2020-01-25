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
  disabled?: boolean,
  /**
   * Size of spacing and text inside the button
   */
  size?: 'small' | 'normal' | 'big'
};

export function Button({ text, onClick, icon, iconOnly = false, loading = false, disabled = false, size = 'normal' }: Props) {
  const StyledButton = useStyled('button')`
    padding: .5rem .75rem;
    color: white;
    background-color: rgba(30, 144, 255, 1);
    font-size: 1rem;
    border: none;
    border-radius: .5rem;
    user-select: none;
    cursor: pointer;
    transition: color .25s ease, transform .25s ease, opacity .25s ease, box-shadow .25s ease;
    [loading="true"] {
      color: transparent;
    }
    [size="small"] {
      padding: .25rem .5rem;
      font-size: .75rem;
    }
    [size="big"] {
      padding: .75rem 1rem;
      font-size: 1.25rem;
    }
    :active {
      transform: translateY(.1rem);
    }
    :disabled {
      opacity: .5;
      cursor: default;
    }
    :focus {
      outline: none;
      box-shadow: 0 0 0 .25rem rgba(30, 144, 255, .5);
    }
  `;
  const StyledIcon = useStyled(FontAwesomeIcon)`
    [only="false"] {
      margin-right: .75rem;
      [size="small"] {
        margin-right: .5rem;
      }
      [size="big"] {
        margin-right: 1rem;
      }
    }
  `;

  return (
    <Spinner spinning={loading} size={size}>
      <StyledButton onClick={onClick} disabled={disabled} data-loading={loading} data-size={size} aria-label={text}>
        {icon && (
          <StyledIcon icon={icon} data-only={iconOnly} data-size={size}/>
        )}
        {(!icon || !iconOnly) && text}
      </StyledButton>
    </Spinner>
  );
}
