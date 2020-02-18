import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import * as React from 'react';
import { useState } from 'react';

import { Focus } from '.';

export default {
  title: 'Focus',
  component: Focus
};

export function include() {
  return (
    <div>
      <Focus type="include" onEscape={action('escape')}>
        <button>
          include
        </button>
      </Focus>
      <button>
        button
      </button>
    </div>
  );
}

export function exclude() {
  return (
    <div>
      <Focus type="exclude">
        <button>
          exclude
        </button>
      </Focus>
      <button>
        button
      </button>
    </div>
  );
}

export function restore() {
  const type = select('Type', ['include', 'exclude'], 'include');
  const [active, setActive] = useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}>
        button
      </button>
      <Focus type={active ? type : undefined} restore={true}>
        <div style={{ padding: '1rem', backgroundColor: 'dodgerblue' }}>
          <button onClick={() => setActive(false)}>
            {active ? type : 'button'}
          </button>
        </div>
      </Focus>
      <button onClick={() => setActive(!active)}>
        button
      </button>
    </div>
  );
}
