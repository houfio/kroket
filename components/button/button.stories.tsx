import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { action } from '@storybook/addon-actions';
import { select, text as string } from '@storybook/addon-knobs';
import * as React from 'react';

import { Button } from '.';

export default {
  title: 'Button'
};

function knobs() {
  const label = string('Label', 'button');
  const click = action('click');
  const size = select('Size', ['small', 'normal', 'big'], 'normal');

  return { label, click, size };
}

export function text() {
  const { label, click, size } = knobs();

  return (
    <Button text={label} onClick={click} size={size}/>
  );
}

export function loading() {
  const { label, click, size } = knobs();

  return (
    <Button text={label} onClick={click} size={size} loading={true}/>
  );
}

export function icon() {
  const { label, click, size } = knobs();

  return (
    <Button text={label} onClick={click} size={size} icon={faStroopwafel}/>
  );
}

export function onlyIcon() {
  const { label, click, size } = knobs();

  return (
    <Button text={label} onClick={click} size={size} icon={faStroopwafel} iconOnly={true}/>
  );
}

export function disabled() {
  const { label, click, size } = knobs();

  return (
    <Button text={label} onClick={click} size={size} disabled={true}/>
  );
}
