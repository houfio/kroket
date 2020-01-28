import * as React from 'react';

import { Focus } from '.';

export default {
  title: 'Focus'
};

export function include() {
  return (
    <div>
      <Focus state="include">
        <button>
          button
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
      <Focus state="exclude">
        <button>
          button
        </button>
      </Focus>
      <button>
        button
      </button>
    </div>
  );
}
