import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import * as React from 'react';

import { Button } from '.';

export default {
  title: 'Button'
};

export const withLabel = () => (
  <Button text={text('Label', 'button')} onClick={action('click')}/>
);

export const withSpinner = () => (
  <Button text={text('Label', 'button')} loading={true}/>
);

export const withIcon = () => (
  <Button text={text('Label', 'button')} onClick={action('click')} icon={faStroopwafel}/>
);
