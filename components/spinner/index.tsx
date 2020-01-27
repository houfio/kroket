import { Focus } from '@kroket/focus';
import { useStyled } from '@kroket/styled';
import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
  /**
   * Defines the children of the spinner.
   */
  children: ReactNode,
  /**
   * Indicates if the spinner should be displayed on top of its children.
   */
  spinning: boolean,
  /**
   * Defines the color of the spinner.
   */
  mode?: 'light' | 'dark',
  /**
   * Defines the size of the spinner.
   */
  size?: 'small' | 'normal' | 'big'
}

export function Spinner({ children, spinning, mode = 'light', size = 'normal' }: Props) {
  const StyledWrapper = useStyled(Focus)`
    position: relative;
    display: inline-block;
  `;
  const StyledSpinner = useStyled('div')`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .5);
    pointer-events: none;
    opacity: 0;
    transition: opacity .25s ease;
    z-index: 10;
    [spinning="true"] {
      pointer-events: auto;
      opacity: 1;
    }
    ::after {
      content: "";
      width: .75rem;
      height: .75rem;
      border: .25rem solid rgba(255, 255, 255, .5);
      border-left-color: white;
      border-radius: 50%;
      transition: width .25s ease, height .25s ease, border-color .25s ease;
      animation: rotate .5s linear infinite;
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    [mode="dark"]::after {
      border: .25rem solid rgba(0, 0, 0, .25);
      border-left-color: black;
    }
    [size="small"]::after {
      width: .5rem;
      height: .5rem;
    }
    [size="big"]::after {
      width: 1rem;
      height: 1rem;
    }
  `;

  return (
    <StyledWrapper state={spinning ? 'exclude' : undefined}>
      {children}
      <StyledSpinner data-mode={mode} data-spinning={spinning} data-size={size}/>
    </StyledWrapper>
  );
}
