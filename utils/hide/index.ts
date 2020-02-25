import { useCallback, useRef } from 'react';

export function useHide(): [(element: HTMLElement, ...exclude: string[]) => void, () => void] {
  const ref = useRef(new Set<HTMLElement>());
  const hide = useCallback((element: HTMLElement, ...exclude: string[]) => {
    if (ref.current.size) {
      return;
    }

    const ignore = ['SCRIPT', 'STYLE', 'TEMPLATE'];

    for (const child of Array.from(element.children) as HTMLElement[]) {
      if (ignore.indexOf(child.tagName) !== -1 || exclude.some((query) => child.matches(query))) {
        continue;
      }

      child.setAttribute('aria-hidden', 'true');
      ref.current.add(child);
    }
  }, []);
  const unhide = useCallback(() => {
    ref.current.forEach((child) => child.removeAttribute('aria-hidden'));
    ref.current.clear();
  }, []);

  return [hide, unhide];
}
