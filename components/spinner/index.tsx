import { useStyled } from '@kroket/styled';
import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
  /**
   * Children to render spinner overlay over
   */
  children: ReactNode,
  /**
   * Toggle the spinner state
   */
  spinning: boolean
}

export function Spinner({ children, spinning }: Props) {
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
      border: .25rem solid rgba(0, 0, 0, .25);
      border-left-color: black;
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
  `;

  return (
    <StyledWrapper>
      {children}
      <StyledSpinner data-spinning={spinning}/>
    </StyledWrapper>
  );
}
