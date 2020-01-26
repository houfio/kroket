import { css } from './index';

afterEach(() => {
  jest.clearAllMocks();
});

it('should return the generated class name', () => {
  expect(css('', false)).toBe('kroket-45h');
});

it('should inject the generated styles', () => {
  css('', false);

  expect(require('@kroket/inject').execute).toHaveBeenCalled();
});

it('should parse data attributes', () => {
  css('[hidden="true"] { opacity: 0; }', false);

  expect(require('@kroket/inject').execute).toMatchSnapshot();
});

it('should parse nested data attributes', () => {
  css('[hidden="true"] { [enabled="false"] { opacity: 0; } }', false);

  expect(require('@kroket/inject').execute).toMatchSnapshot();
});

it('should remember the depth of attributes', () => {
  css('@keyframes test { from { opacity: 1; } to { opacity: 0; } } animation: test;', false);

  expect(require('@kroket/inject').execute).toMatchSnapshot();
});
