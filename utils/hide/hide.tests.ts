import { act, renderHook } from '@testing-library/react-hooks';

import { useHide } from '.';

it('should hide all children', () => {
  const { result: { current: [hide] } } = renderHook(() => useHide());

  document.body.innerHTML = `
    <main>
      <button>
        test
      </button>
    </main>
    <div>
      test
    </div>
  `;

  act(() => {
    hide(document.body);
  });

  expect(document.body).toMatchSnapshot();
});

it('should hide all children except the excluded', () => {
  const { result: { current: [hide] } } = renderHook(() => useHide());

  document.body.innerHTML = `
    <main>
      <button>
        test
      </button>
    </main>
    <div>
      test
    </div>
  `;

  act(() => {
    hide(document.body, 'div');
  });

  expect(document.body).toMatchSnapshot();
});

it('should unhide all hidden children', () => {
  const { result: { current: [hide, unhide] } } = renderHook(() => useHide());

  document.body.innerHTML = `
    <main>
      <button>
        test
      </button>
    </main>
    <div>
      test
    </div>
  `;

  act(() => {
    hide(document.body);
    unhide();
  });

  expect(document.body).toMatchSnapshot();
});

it('shouldn\'t hide when there are hidden children', () => {
  const { result: { current: [hide] } } = renderHook(() => useHide());

  document.body.innerHTML = `
    <main>
      <button>
        test
      </button>
    </main>
    <div>
      test
    </div>
  `;

  act(() => {
    hide(document.body);
    hide(document.body.getElementsByTagName('main')[0]);
  });

  expect(document.body).toMatchSnapshot();
});
