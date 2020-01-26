import { hash } from './index';

it('should return the hashed string', () => {
  expect(hash('kroket')).toBe('swfd9l');
});
