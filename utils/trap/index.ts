const tabbable = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])'
];

function getIndex(element: HTMLElement) {
  const index = parseInt(element.getAttribute('tabindex') || '', 10);

  if (!isNaN(index)) {
    return index;
  } else if (element.contentEditable === 'true') {
    return 0;
  }

  return element.tabIndex;
}

function isHidden(element: HTMLElement) {
  return element.offsetParent === null || getComputedStyle(element).visibility === 'hidden';
}

function getTabbableElements(element: HTMLElement) {
  let elements: HTMLElement[] = [];

  element.querySelectorAll<HTMLElement>(tabbable.join(',')).forEach((elem) => {
    if (getIndex(elem) > -1 && !(elem as any).disabled && !isHidden(elem)) {
      elements = [
        ...elements,
        elem
      ];
    }
  });

  return elements;
}

export function trap(event: KeyboardEvent | undefined, element: HTMLElement) {
  if (event && event.key !== 'Tab') {
    return;
  }

  const elements = getTabbableElements(element);

  if (!event) {
    elements[0].focus();

    return;
  }

  const current = event.target as HTMLElement;
  let next = elements.indexOf(current) + (event.shiftKey ? -1 : 0);

  if (next < 0) {
    next = 0;
  } else if (next > elements.length - 1) {
    next = elements.length - 1;
  }

  elements[next].focus();
  event.preventDefault();
}
