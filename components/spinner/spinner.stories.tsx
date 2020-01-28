import { boolean, select } from '@storybook/addon-knobs';
import * as React from 'react';

import { Spinner } from '.';

export default {
  title: 'Spinner'
};

export function spinner() {
  const spinning = boolean('Spinning', true);
  const mode = select('Mode', ['dark', 'light'], 'dark');
  const size = select('Size', ['small', 'normal', 'big'], 'normal');

  return (
    <Spinner spinning={spinning} mode={mode} size={size}>
      <div style={{ width: '10rem', height: '10rem', backgroundColor: 'dodgerblue' }}>
        <button>
          button
        </button>
      </div>
    </Spinner>
  );
}
