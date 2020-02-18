import * as React from 'react';

import { Spinner } from '.';

export default {
  title: 'Utilities/Spinner',
  component: Spinner
};

export const simple = () => (
  <Spinner spinning={true}>
    <div style={{ width: '10rem', height: '10rem', backgroundColor: 'dodgerblue' }}>
      <button>
        button
      </button>
    </div>
  </Spinner>
);
