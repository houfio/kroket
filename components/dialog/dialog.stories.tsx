import * as React from 'react';
import { useState } from 'react';

import { Dialog } from '.';

export default {
  title: 'Components/Dialog',
  component: Dialog
};

export const dialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        open
      </button>
      <Dialog open={open} onDismiss={() => setOpen(false)}>
        Hoi!
        <button>
          test
        </button>
      </Dialog>
    </>
  );
};
