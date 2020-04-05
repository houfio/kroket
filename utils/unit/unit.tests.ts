import { unit } from '.';

it('should return 0px on invalid input', () => {
  expect(unit('test')).toEqual([0, 'px']);
  expect(unit('test1')).toEqual([0, 'px']);
});

it('should return the correct value', () => {
  expect(unit('1rem')).toEqual([1, 'rem']);
});
