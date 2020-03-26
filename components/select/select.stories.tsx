import * as React from 'react';
import { useState } from 'react';

import { Select } from '.';

export default {
  title: 'Components/Select',
  component: Select
};

export function normal() {
  const [value, setValue] = useState('first');

  return (
    <Select
      name="test"
      label="Test"
      value={value}
      options={[{
        value: 'first',
        label: 'First'
      }, {
        value: 'second',
        label: 'Second'
      }, {
        value: 'third',
        label: 'Third'
      }]}
      setValue={setValue}
    />
  );
}
