export function inject(text: boolean) {
  const element = document.createElement('style');

  element.setAttribute('data-kroket', '');
  document.head.appendChild(element);

  const sheet = element.sheet as CSSStyleSheet;
  const execute = (rules: string[]) => rules.forEach((rule) => {
    if (text) {
      element.appendChild(document.createTextNode(rule));
    } else {
      sheet.insertRule(rule, sheet.cssRules.length);
    }
  });

  execute.sheet = sheet;

  return execute;
}
