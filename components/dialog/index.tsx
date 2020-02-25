import { useContainer } from '@kroket/container';
import { Focus } from '@kroket/focus';
import { useLock } from '@kroket/lock';
import { useStyled } from '@kroket/styled';
import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children?: ReactNode,
  open?: boolean,
  onDismiss?: () => void,
  strict?: boolean
};

export function Dialog({ children, open = false, onDismiss, strict = false }: Props) {
  const [mount, setMount] = useState(open);
  const container = useContainer('kroket-dialog');
  const [lock, unlock] = useLock();
  const StyledBackdrop = useStyled('div')`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${'backdrop'};
    animation: fadeIn .25s ease;
    z-index: 500;
    [open="false"] {
      animation-name: fadeOut;
    }
  `;
  const StyledFocus = useStyled(Focus)`
    position: fixed !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  const StyledDialog = useStyled('div')`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(1rem);
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translateY(1rem);
      }
    }
    padding: .75rem 1rem;
    color: ${'foreground'};
    background-color: ${'background'};
    border-radius: ${'borderRadius'};
    animation: fadeIn .25s ease;
    z-index: 501;
    [open="false"] {
      animation-name: fadeOut;
    }
  `;

  useEffect(() => {
    if (!open) {
      return;
    }

    lock();
    setMount(true);
  }, [open, setMount, lock]);

  const unmount = () => {
    if (!open) {
      unlock();
      setMount(false);
    }
  };

  return mount ? createPortal((
    <>
      <StyledBackdrop data-open={open} onAnimationEnd={unmount}/>
      <StyledFocus type="include" restore={true} onEscape={strict ? undefined : onDismiss}>
        <StyledDialog role="dialog" aria-modal="true" data-open={open}>
          {children}
        </StyledDialog>
      </StyledFocus>
    </>
  ), container) : null;
}
