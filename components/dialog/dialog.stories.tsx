import * as React from 'react';
import { useState } from 'react';

import { Button } from '../button';

import { Dialog } from '.';

export default {
  title: 'Components/Dialog',
  component: Dialog
};

export const dialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button text="Open" onClick={() => setOpen(true)}/>
      <Dialog open={open} onDismiss={() => setOpen(false)}>
        Hoi!
        <Button text="Test"/>
      </Dialog>
    </>
  );
};

export const strict = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button text="Open" onClick={() => setOpen(true)}/>
      <Dialog open={open} strict={true}>
        Hoi!
        <Button text="Close" onClick={() => setOpen(false)}/>
      </Dialog>
    </>
  );
};
