import { useStyled } from '@kroket/styled';
import * as React from 'react';
import { ReactNode, useEffect, useRef } from 'react';
import 'wicg-inert';

type Props = {
  /**
   * Children to render spinner overlay over
   */
  children: ReactNode,
  /**
   * Toggle the spinner state
   */
  spinning: boolean,
  /**
   * The color of the spinner
   */
  mode?: 'light' | 'dark',
  /**
   * Size of the spinner
   */
  size?: 'small' | 'normal' | 'big'
}

export function Spinner({ children, spinning, mode = 'light', size = 'normal' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const StyledWrapper = useStyled('div')`
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

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (spinning) {
      ref.current.setAttribute('inert', '');
    } else {
      ref.current.removeAttribute('inert');
    }
  }, [spinning]);

  return (
    <StyledWrapper ref={ref}>
      {children}
      <StyledSpinner data-mode={mode} data-spinning={spinning} data-size={size}/>
    </StyledWrapper>
  );
}
