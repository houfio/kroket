import { useStyled } from '@kroket/styled';
import * as React from 'react';
import { forwardRef } from 'react';
import { ChangeEventHandler } from 'react';
import { FocusEventHandler } from 'react';

type Props = {
  /**
   * Defines the unique name of this checkbox.
   */
  name: string,
  /**
   * Defines a human-readable label describing the expected input.
   */
  label: string,
  /**
   * Defines if the checkbox is checked.
   */
  checked: boolean,
  /**
   * Indicates if this checkbox is a radio.
   */
  radio?: boolean,
  /**
   * Defines the handler called when the checkbox is changed.
   */
  onChange: ChangeEventHandler<HTMLInputElement>,
  /**
   * Defines the handler called when the checkbox gains focus.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>,
  /**
   * Defines the handler called when the checkbox loses focus.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ name, label, checked, radio = false, onChange, onFocus, onBlur }, ref) => {
  const StyledWrapper = useStyled('div')`
    position: relative;
    height: 1.5rem;
    margin-bottom: 1rem;
  `;
  const StyledLabel = useStyled('label')`
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    :hover {
      cursor: pointer;
    }
    ::before, ::after {
      content: "";
      display: inline-block;
    }
    ::before {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: .5rem;
      background-color: ${'card'};
      border-radius: ${'borderRadius'};
      transition: box-shadow .25s ease, background-color .25s ease;
    }
    ::after {
      position: absolute;
      top: .2rem;
      left: .5rem;
      width: .5rem;
      height: .9rem;
      border: 3px solid ${'card'};
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
    }
    [radio="true"] {
      ::before  {
        border-radius: 50%;
      }
      ::after {
        top: .5rem;
        left: .5rem;
        height: .5rem;
        background-color: ${'card'};
        border: none;
        border-radius: 50%;
        transform: none;
      }
    }
  `;
  const StyledInput = useStyled('input')`
    opacity: 0;
    width: 0;
    height: 0;
    :focus ~ label::before {
      box-shadow: 0 0 0 3px ${'focus'};
    }
    :checked ~ label::before {
      background-color: ${'primary'};
    }
  `;

  return (
    <StyledWrapper title={label}>
      <StyledInput
        id={name}
        name={name}
        checked={checked}
        type={radio ? 'radio' : 'checkbox'}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
      />
      <StyledLabel htmlFor={name} data-radio={radio}>
        {label}
      </StyledLabel>
    </StyledWrapper>
  );
});
