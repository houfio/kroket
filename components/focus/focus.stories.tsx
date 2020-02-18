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
      <Focus type="include">
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
      <div style={{ padding: '1rem', backgroundColor: 'dodgerblue' }}>
        <Focus type={active ? type : undefined} restore={true}>
          <button onClick={() => setActive(false)}>
            {active ? type : 'button'}
          </button>
        </Focus>
      </div>
      <button onClick={() => setActive(!active)}>
        button
      </button>
    </div>
  )
}
