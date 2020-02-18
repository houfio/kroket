import * as React from 'react';

import { Focus } from '.';

export default {
  title: 'Utilities/Focus',
  component: Focus
};

export const include = () => (
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

export const exclude = () => (
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
