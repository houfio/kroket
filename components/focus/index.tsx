import { useContainer } from '@kroket/container';
import { useKey } from '@kroket/key';
import { useStyled } from '@kroket/styled';
import { useTrap } from '@kroket/trap';
import 'inert-polyfill';
import * as React from 'react';
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  /**
   * Defines the children of the focus container.
   */
  children?: ReactNode,
  /**
   * Indicates the typo of the focus container. When set to 'include', the container acts as a focus trap for its
   * children. When set to 'exclude', it acts as a focus trap for its parents instead.
   */
  type?: 'include' | 'exclude',
  /**
   * Indicates if the last focused element should restore focus when state changes from active to inactive.
   */
  restore?: boolean,
  /**
   * Defines the handler called when the user attempts to escape the focus trap.
   */
  onEscape?: () => void,
  className?: string
};

export function Focus({ children, type, restore = false, onEscape, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useRef(true);
  const [last, setLast] = useState<HTMLElement>();
  const container = useContainer('kroket-focus-trap');
  const [start, end] = useTrap(ref, type === 'include');
  const StyledFocus = useStyled('div')`
    position: relative;
    [type="include"] {
      z-index: 10001;
    }
  `;
  const StyledTrap = useStyled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
  `;

  useKey('Escape', () => type === 'include' && onEscape?.(), [onEscape, type]);

  useLayoutEffect(() => {
    setLast(type && document.activeElement as HTMLElement || undefined);
  }, [type, setLast]);

  useLayoutEffect(() => () => {
    mounted.current = false;
  }, []);

  useEffect(() => {
    if (restore && !type && last) {
      last.focus();
    }

    return () => {
      if (restore && !mounted.current && last) {
        last.focus();
      }
    };
  }, [restore, type, last]);

  return (
    <>
      {type === 'include' && createPortal((
        <StyledTrap onClick={() => onEscape?.()}/>
      ), container)}
      <StyledFocus ref={ref} inert={type === 'exclude' ? '' : undefined} className={className} data-type={type}>
        {start}
        {children}
        {end}
      </StyledFocus>
    </>
  );
}
