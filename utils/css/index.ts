import { hash } from '@kroket/hash';
import { inject } from '@kroket/inject';
import { memoize } from '@kroket/memoize';

const stylis = require('stylis');

export const css = memoize((style: string) => {
  const selector = `kroket-${hash(style)}`;
  const result = stylis(`.${selector}`, style) as string;
  let styles: string[] = [];
  let current = '';
  let depth = 0;

  for (const character of result) {
    if (character === '[') {
      current = `${current.substr(0, current.length - 1)}[data-`;
    } else {
      current += character;
    }

    if (character === '{') {
      depth++;
    } else if (character === '}') {
      depth--;

      if (!depth) {
        if (current) {
          styles = [
            ...styles,
            current
          ];
        }

        current = '';
      }
    }
  }

  inject(styles);

  return selector;
});
