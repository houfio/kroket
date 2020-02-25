import { useCallback, useRef } from 'react';

type Fn = () => void;

export function useLock(): [Fn, Fn] {
  const ref = useRef(new Map<HTMLElement, number>());
  const lock = useCallback(() => {
    if (ref.current.size) {
      return;
    }

    const fixed = [document.body, ...Array.from(document.querySelectorAll<HTMLElement>('[data-kroket-fixed]'))];
    const scrollbar = innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';

    for (const element of fixed) {
      const width = parseInt(getComputedStyle(element).paddingRight, 10);

      ref.current.set(element, width);

      element.style.paddingRight = `${width + scrollbar}px`;
    }
  }, []);
  const unlock = useCallback(() => {
    document.body.style.overflow = 'auto';

    ref.current.forEach((width, element) => element.style.paddingRight = `${width}px`);
    ref.current.clear();
  }, []);

  return [lock, unlock];
}
