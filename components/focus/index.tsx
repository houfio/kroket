import { trap } from '@kroket/trap';
import 'inert-polyfill';
import * as React from 'react';
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';

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
  className?: string
};

export function Focus({ children, type, restore = false, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [last, setLast] = useState<HTMLElement>();

  useEffect(() => {
    if (!ref.current || type !== 'include') {
      return;
    }

    function handleKeyDown(event?: KeyboardEvent) {
      trap(event, ref.current!);
    }

    handleKeyDown();

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [type]);

  useLayoutEffect(() => {
    setLast(type && document.activeElement as HTMLElement || undefined);
  }, [type, setLast]);

  useEffect(() => {
    if (restore && !type && last) {
      last.focus();
    }
  }, [restore, type, last]);

  return (
    <div ref={ref} className={className} inert={type === 'exclude' ? '' : undefined}>
      {children}
    </div>
  );
}
