let element: HTMLStyleElement | undefined;

export function inject(rules: string[]) {
  if (!element) {
    element = document.createElement('style');
    element.setAttribute('data-kroket', '');

    document.head.appendChild(element);
  }

  if (element.sheet) {
    const sheet = element.sheet as CSSStyleSheet;

    for (const rule of rules) {
      sheet.insertRule(rule, sheet.cssRules.length);
    }
  }
}
