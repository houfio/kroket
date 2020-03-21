import * as React from 'react';

import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input
};

export const text = () => (
  <Input name="test" title="Test" value="test" onChange={console.log}/>
);
