import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import * as React from 'react';

import { Button } from '.';

export default {
  title: 'Button'
};

export const label = () => (
  <>
    <Button text={text('Label', 'button')} onClick={action('click')} size="small"/>
    <br/>
    <Button text={text('Label', 'button')} onClick={action('click')}/>
    <br/>
    <Button text={text('Label', 'button')} onClick={action('click')} size="big"/>
  </>
);

export const loading = () => (
  <>
    <Button text="button" loading={true} size="small"/>
    <br/>
    <Button text="button" loading={true}/>
    <br/>
    <Button text="button" loading={true} size="big"/>
  </>
);

export const icon = () => (
  <>
    <Button text={text('Label', 'button')} onClick={action('click')} icon={faStroopwafel} size="small"/>
    <br/>
    <Button text={text('Label', 'button')} onClick={action('click')} icon={faStroopwafel}/>
    <br/>
    <Button text={text('Label', 'button')} onClick={action('click')} icon={faStroopwafel} size="big"/>
  </>
);

export const onlyIcon = () => (
  <>
    <Button text="button" onClick={action('click')} icon={faStroopwafel} iconOnly={true} size="small"/>
    <br/>
    <Button text="button" onClick={action('click')} icon={faStroopwafel} iconOnly={true}/>
    <br/>
    <Button text="button" onClick={action('click')} icon={faStroopwafel} iconOnly={true} size="big"/>
  </>
);

export const disabled = () => (
  <>
    <Button text={text('Label', 'button')} disabled={true} size="small"/>
    <br/>
    <Button text={text('Label', 'button')} disabled={true}/>
    <br/>
    <Button text={text('Label', 'button')} disabled={true} size="big"/>
  </>
);
