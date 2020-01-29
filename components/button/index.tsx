import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from '@kroket/spinner';
import { useStyled } from '@kroket/styled';
import * as React from 'react';
import { forwardRef } from 'react';

type Props = {
  /**
   * Defines a human-readable title describing the action of the button. Also sets the aria-label property.
   */
  text: string,
  /**
   * Defines the button click behaviour.
   */
  onClick?: () => void,
  /**
   * Defines an icon displayed next to the button text.
   */
  icon?: IconProp,
  /**
   * Indicates if only the icon should be visible in the button. The text will still be used by assistive technologies.
   */
  iconOnly?: boolean,
  /**
   * Indicates if the button is currently executing an action. Also sets the button state to disabled.
   */
  loading?: boolean,
  /**
   * Indicate if the button is disabled.
   */
  disabled?: boolean,
  /**
   * Defines the size of text and spacing inside the button.
   */
  size?: 'small' | 'normal' | 'big',
  /**
   * Defines the button behaviour inside forms.
   */
  type?: 'button' | 'submit',
  className?: string
};

export const Button = forwardRef<HTMLButtonElement, Props>(({ text, onClick, icon, iconOnly = false, loading = false, disabled = false, size = 'normal', type = 'button', className }, ref) => {
  const StyledButton = useStyled('button')`
    padding: .5rem .75rem;
    color: ${'text'};
    background-color: ${'primary'};
    font-size: 1rem;
    border: none;
    border-radius: .5rem;
    user-select: none;
    cursor: pointer;
    transition: color .25s ease, transform .25s ease, opacity .25s ease, padding .25s ease, font-size .25s ease, box-shadow .25s ease;
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
      box-shadow: 0 0 0 .25rem ${'focus'};
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
      <StyledButton
        title={text}
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={className}
        data-loading={loading}
        data-size={size}
        ref={ref}
      >
        {icon && (
          <StyledIcon icon={icon} data-only={iconOnly} data-size={size}/>
        )}
        {(!icon || !iconOnly) && text}
      </StyledButton>
    </Spinner>
  );
});
