import * as React from 'react';
import { ReactNode, RefObject, useEffect } from 'react';

export const tabbableQueries = [
  'input',
  'button',
  'select',
  'textarea',
  'a[href]',
  '*[tabindex]:not([data-focus-trap])'
];

export function useTrap<T extends HTMLElement>(ref: RefObject<T>, enabled: boolean): [ReactNode, ReactNode] {
  useEffect(() => {
    if (enabled) {
      focusEdge(true);
    }
  }, [enabled]);

  const getTabbable = () => {
    if (!ref.current) {
      return [];
    }

    return Array.from(ref.current.querySelectorAll<HTMLElement>(tabbableQueries.join(','))).filter((e) => e.tabIndex >= 0);
  };

  const focusEdge = (first: boolean) => {
    const tabbable = getTabbable();

    if (!tabbable.length) {
      if (ref.current) {
        const marker = ref.current.querySelector<HTMLDivElement>('[data-focus-trap]');

        marker?.focus();
      }

      return;
    }

    tabbable[first ? 0 : tabbable.length - 1].focus();
  };

  return enabled ? [(
    <div tabIndex={0} onFocus={() => focusEdge(false)} data-focus-trap=""/>
  ), (
    <div tabIndex={0} onFocus={() => focusEdge(true)} data-focus-trap=""/>
  )] : [<></>, <></>];
}
