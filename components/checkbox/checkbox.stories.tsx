import * as React from 'react';
import { useState } from 'react';

import { Checkbox } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
};

export function normal() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox name="test" label="Test" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
  );
}
