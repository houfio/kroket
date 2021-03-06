import { Focus } from '@kroket/focus';
import { useKey } from '@kroket/key';
import { useStyled } from '@kroket/styled';
import * as React from 'react';
import { useCallback, useRef, useState } from 'react';

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
   * Defines all the possible values.
   */
  options: { value: string, label: string }[],
  setValue: (value: string) => void
};

export function Select({ name, label, value, options, setValue }: Props) {
  const ref = useRef<HTMLButtonElement>();
  const [open, setOpen] = useState(false);
  const StyledWrapper = useStyled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  `;
  const StyledToggle = useStyled('button')`
    padding: 1.75rem 1.25rem .6rem 1.25rem;
    background-color: ${'card'};
    border: none;
    border-radius: ${'borderRadius'};
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    user-select: none;
    text-align: start;
    appearance: none;
    transition: box-shadow .25s ease;
    :focus {
      outline: none;
      box-shadow: 0 0 0 .25rem ${'focus'};
    }
  `;
  const StyledLabel = useStyled('span')`
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
  const StyledMenu = useStyled('div')`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: calc(100% + .5rem);
    width: 100%;
    z-index: 10;
  `;
  const StyledItem = useStyled('button')`
    padding: .5rem 1.25rem;
    background-color: ${'card'};
    border: none;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    text-align: start;
    appearance: none;
    transition: box-shadow .25s ease, background-color .25s ease;
    :hover, :focus {
      outline: none;
      background-color: ${'cardHover'};
    }
    :active, [active="true"] {
      background-color: ${'cardActive'};
    }
    :first-child {
      border-top-left-radius: ${'borderRadius'};
      border-top-right-radius: ${'borderRadius'};
    }
    :last-child {
      border-bottom-left-radius: ${'borderRadius'};
      border-bottom-right-radius: ${'borderRadius'};
    }
  `;
  const changeValue = useCallback((offset: number) => {
    if (!ref.current || !ref.current.matches(':focus')) {
      return;
    }

    const index = options.findIndex(({ value: v }) => value === v);

    if (index === -1) {
      return;
    }

    let target = index + offset;

    if (target < 0) {
      target = options.length - 1;
    } else if (target > options.length - 1) {
      target = 0;
    }

    setValue(options[target].value);
  }, [ref, value, options, setValue]);

  useKey('ArrowUp', () => changeValue(-1), [changeValue]);
  useKey('ArrowDown', () => changeValue(1), [changeValue]);

  return (
    <StyledWrapper title={label}>
      <input type="hidden" value={value}/>
      <StyledToggle
        ref={ref}
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-labelledby={name}
      >
        <StyledLabel id={name}>
          {label}
        </StyledLabel>
        {options.find((o) => o.value === value)?.label || ''}
      </StyledToggle>
      <Focus type={open ? 'include' : undefined} onEscape={() => setOpen(false)} restore={true}>
        {open && (
          <StyledMenu role="menu">
            {options.map(({ value: v, label: l }) => (
              <StyledItem
                key={v}
                tabIndex={0}
                role="menuitem"
                onClick={() => {
                  setValue(v);
                  setOpen(false);
                }}
                data-active={value === v}
              >
                {l}
              </StyledItem>
            ))}
          </StyledMenu>
        )}
      </Focus>
    </StyledWrapper>
  );
}
