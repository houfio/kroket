import { useStyled } from '@kroket/styled';
import { unit } from '@kroket/unit';
import * as React from 'react';
import { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';

type Props = {
  /**
   * Defines the unique name of this input.
   */
  name: string,
  /**
   * Defines a human-readable label describing the expected input.
   */
  label: string,
  /**
   * Defines the current value.
   */
  value: string,
  /**
   * Indicates the type of the expected input.
   */
  type?: 'text' | 'number' | 'password' | 'email' | 'url' | 'area',
  /**
   * Indicates if the input is required.
   */
  required?: boolean,
  /**
   * Defines the current validation error.
   */
  error?: string,
  /**
   * Defines the handler called when the input is changed.
   */
  onChange: ChangeEventHandler<HTMLInputElement>,
  /**
   * Defines the handler called when the input gains focus.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>,
  /**
   * Defines the handler called when the input loses focus.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
};

export const Input = forwardRef<HTMLInputElement, Props>(({ name, label, value, type, required, error, onFocus, onChange, onBlur }, ref) => {
  const StyledWrapper = useStyled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    [resize="true"]::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: .5rem;
      height: .5rem;
      bottom: .5rem;
      right: .5rem;
      border: 2px solid ${'foreground'};
      border-top: none;
      border-left: none;
      border-bottom-right-radius: ${(theme) => {
        const [size, ext] = unit(theme.borderRadius);

        return `${size / 2}${ext}`;
      }};
      opacity: .5;
      pointer-events: none;
    }
    :focus-within::after {
      z-index: 1;
    }
  `;
  const StyledLabel = useStyled('label')`
    position: absolute;
    top: .75rem;
    left: 1.25rem;
    color: ${'foreground'};
    opacity: .5;
    font-size: .75rem;
    font-weight: bold;
    text-transform: uppercase;
    pointer-events: none;
    [required="true"]::after {
      content: " *";
    }
  `;
  const StyledInput = useStyled(type === 'area' ? 'textarea' : 'input')`
    padding: 1.25rem 1.25rem .25rem 1.25rem;
    background-color: ${'card'};
    border: none;
    border-radius: ${'borderRadius'};
    font-family: inherit;
    font-size: 1rem;
    resize: vertical;
    overflow: auto;
    transition: box-shadow .25s ease;
    [invalid="true"] {
      box-shadow: 0 0 0 .25rem ${'error'};
    }
    [big="true"] {
      padding-top: 1.75rem;
      padding-bottom: .6rem;
    }
    :focus {
      outline: none;
      box-shadow: 0 0 0 .25rem ${'focus'};
      z-index: 1;
      ~ label {
        z-index: 1;
      }
    }
    ::-webkit-resizer {
      display: none;
    }
  `;
  const StyledError = useStyled('div')`
    padding: .5rem 1.25rem .25rem;
    color: ${'background'};
    background-color: ${'error'};
    border-bottom-left-radius: ${'borderRadius'};
    border-bottom-right-radius: ${'borderRadius'};
    box-shadow: 0 0 0 .25rem ${'error'};
    z-index: -1;
  `;

  return (
    <StyledWrapper title={`${label}${required ? ' (required)' : ''}`} data-resize={type === 'area'}>
      <StyledInput
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...type !== 'area' && {
          type
        }}
        {...error && {
          'aria-invalid': Boolean(error),
          'aria-describedby': `${name}_error`
        }}
        data-invalid={Boolean(error)}
        data-big={type === 'area'}
        ref={ref}
      />
      <StyledLabel htmlFor={name} data-required={required}>
        {label}
      </StyledLabel>
      {error && (
        <StyledError id={`${name}_error`}>
          {error}
        </StyledError>
      )}
    </StyledWrapper>
  );
});
