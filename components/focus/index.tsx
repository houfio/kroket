import { trap } from '@kroket/trap';
import 'inert-polyfill';
import * as React from 'react';
import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  /**
   * Defines the children of the focus container.
   */
  children?: ReactNode,
  /**
   * Indicates the state of the focus container. When set to 'include', the container acts as a focus trap for its
   * children. When set to 'exclude', it acts as a focus trap for its parents instead.
   */
  state?: 'include' | 'exclude',
  className?: string
};

export function Focus({ children, state, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || state !== 'include') {
      return;
    }

    function handleKeyDown(event?: KeyboardEvent) {
      trap(event, ref.current!);
    }

    handleKeyDown();

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [state]);

  return (
    <div ref={ref} className={className} inert={state === 'exclude' ? '' : undefined}>
      {children}
    </div>
  );
}
