import * as React from 'react';

import { Focus } from '.';

export default {
  title: 'Utilities/Focus',
  component: Focus
};

export function include() {
  return (
    <div>
      <Focus type="include">
        <button>
          include
        </button>
        <button>
          include
        </button>
      </Focus>
      <button>
        button
      </button>
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
        <button>
          exclude
        </button>
      </Focus>
      <button>
        button
      </button>
      <button>
        button
      </button>
    </div>
  );
}
