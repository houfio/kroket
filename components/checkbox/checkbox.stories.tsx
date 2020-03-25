import * as React from 'react';
import { ChangeEvent, useState } from 'react';

import { Checkbox } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
};

export function checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox name="test" label="Test" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
  );
}

export function radio() {
  const [checked, setChecked] = useState('first');

  const updateChecked = (event: ChangeEvent<HTMLInputElement>) => setChecked(event.target.name);

  return (
    <>
      <Checkbox name="first" label="First" checked={checked === 'first'} radio={true} onChange={updateChecked}/>
      <Checkbox name="second" label="Second" checked={checked === 'second'} radio={true} onChange={updateChecked}/>
      <Checkbox name="third" label="Third" checked={checked === 'third'} radio={true} onChange={updateChecked}/>
    </>
  );
}
