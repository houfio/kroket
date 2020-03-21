import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button
};

export function text() {
  return (
    <>
      <Button text="button" size="big"/>
      <Button text="button" size="normal"/>
      <Button text="button" size="small"/>
    </>
  );
}

export function loading() {
  return (
    <>
      <Button text="button" size="big" loading={true}/>
      <Button text="button" size="normal" loading={true}/>
      <Button text="button" size="small" loading={true}/>
    </>
  );
}

export function icon() {
  return (
    <>
      <Button text="button" size="big" icon={faStroopwafel}/>
      <Button text="button" size="normal" icon={faStroopwafel}/>
      <Button text="button" size="small" icon={faStroopwafel}/>
    </>
  );
}

export function onlyIcon() {
  return (
    <>
      <Button text="button" size="big" icon={faStroopwafel} iconOnly={true}/>
      <Button text="button" size="normal" icon={faStroopwafel} iconOnly={true}/>
      <Button text="button" size="small" icon={faStroopwafel} iconOnly={true}/>
    </>
  );
}

export function disabled() {
  return (
    <>
      <Button text="button" size="big" disabled={true}/>
      <Button text="button" size="normal" disabled={true}/>
      <Button text="button" size="small" disabled={true}/>
    </>
  );
}
