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
    <Input name="test" label="Test" value={input} onChange={(e) => setInput(e.target.value)}/>
  );
}

export function area() {
  const [input, setInput] = useState('');

  return (
    <Input name="test" label="Test" value={input} type="area" onChange={(e) => setInput(e.target.value)}/>
  );
}

export function required() {
  const [input, setInput] = useState('');

  return (
    <Input name="test" label="Test" value={input} required={true} onChange={(e) => setInput(e.target.value)}/>
  );
}

export function number() {
  const [input, setInput] = useState('');

  return (
    <Input name="test" label="Test" value={input} type="number" onChange={(e) => setInput(e.target.value)}/>
  );
}

export function error() {
  const [input, setInput] = useState('');

  return (
    <Input name="test" label="Test" value={input} error="Invalid input" onChange={(e) => setInput(e.target.value)}/>
  );
}
