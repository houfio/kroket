import { inject } from './index';

const style = 'body { background-color: dodgerblue; }';

afterEach(() => {
  const element = document.querySelector('[data-kroket]');

  element?.parentNode?.removeChild(element);
});

it('should add a style tag to the head', () => {
  inject(true);

  expect(document.head).toMatchSnapshot();
});

it('should add a text node to the style tag', () => {
  inject(true)([style]);

  expect(document.head).toMatchSnapshot();
});

it('should insert a rule to the style tag', () => {
  const execute = inject(false);

  execute([style]);

  expect(document.head).toMatchSnapshot();
  expect(execute.sheet.cssRules.length).toBe(1);
});
