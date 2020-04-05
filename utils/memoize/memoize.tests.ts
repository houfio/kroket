import { memoize } from '.';

let parse: (value: string) => number;
let memoizedParse: (value: string, remember?: boolean) => number;

beforeEach(() => {
  parse = jest.fn().mockImplementation((value: string) => parseInt(value, 10));
  memoizedParse = memoize(parse);
});

it('should return the result of a function', () => {
  expect(memoizedParse('1')).toBe(1);
});

it('should return the same result if the arguments have not changed', () => {
  expect(memoizedParse('1')).toBe(1);
  expect(memoizedParse('1')).toBe(1);
});

it('should not execute the memoized function if the arguments have not changed', () => {
  memoizedParse('1');
  memoizedParse('1');

  expect(parse).toHaveBeenCalledTimes(1);
});

it('should not memoize when remember is false', () => {
  memoizedParse('1', false);
  memoizedParse('1', false);

  expect(parse).toHaveBeenCalledTimes(2);
});

it('should invalidate a memoize cache if new arguments are provided', () => {
  expect(memoizedParse('1')).toBe(1);
  expect(memoizedParse('2')).toBe(2);
  expect(parse).toHaveBeenCalledTimes(2);
});

it('should resume memoization after a cache invalidation', () => {
  expect(memoizedParse('1')).toBe(1);
  expect(parse).toHaveBeenCalledTimes(1);
  expect(memoizedParse('2')).toBe(2);
  expect(parse).toHaveBeenCalledTimes(2);
  expect(memoizedParse('2')).toBe(2);
  expect(parse).toHaveBeenCalledTimes(2);
});
