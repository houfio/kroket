import { hash } from '@kroket/hash';
import { inject } from '@kroket/inject';

const stylis = require('stylis');

export function css(style: string) {
  const selector = `kroket-${hash(style)}`;
  const result = stylis(`.${selector}`, style) as string;

  inject(result.split('}').filter(Boolean).map((rule) => `${rule}}`));

  return selector;
}
