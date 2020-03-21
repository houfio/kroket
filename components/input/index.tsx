import { useStyled } from '@kroket/styled';
import * as React from 'react';
import type { ChangeEventHandler, FocusEventHandler } from 'react';

type Props = {
  name: string,
  title: string,
  value: string,
  type?: 'text' | 'number' | 'password' | 'url'
  onChange: ChangeEventHandler<HTMLInputElement>,
  onFocus?: FocusEventHandler<HTMLInputElement>,
  onBlur?: FocusEventHandler<HTMLInputElement>
};

export function Input({ name, title, value, type, onFocus, onChange, onBlur }: Props) {
  const StyledWrapper = useStyled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
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
  `;
  const StyledInput = useStyled('input')`
    padding: 1.75rem 1.25rem .75rem 1.25rem;
    background-color: ${'card'};
    border: none;
    border-radius: ${'borderRadius'};
    font-family: inherit;
    font-size: 1rem;
    transition: box-shadow .25s ease;
    :focus {
      outline: none;
      box-shadow: 0 0 0 .25rem ${'focus'};
      z-index: 1;
      ~ label {
        z-index: 1;
      }
    }
  `;

  return (
    <StyledWrapper title={title}>
      <StyledInput
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <StyledLabel htmlFor={name}>
        {title}
      </StyledLabel>
    </StyledWrapper>
  );
}
