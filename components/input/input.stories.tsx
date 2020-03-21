import * as React from 'react';
import { useState } from 'react';

import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input
};

export function text() {
  const [input, setInput] = useState('');

  return (
    <Input name="test" title="Test" value={input} onChange={(e) => setInput(e.target.value)}/>
  );
}

export function area() {
  const [input, setInput] = useState('');

  return (
    <Input name="test" title="Test" value={input} type="area" onChange={(e) => setInput(e.target.value)}/>
  );
}
