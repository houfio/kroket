import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import * as React from 'react';

import { Button } from '.';

export default {
  title: 'Button'
};

export const standard = () => (
  <Button text={text('Label', 'button')} onClick={action('click')}/>
);
