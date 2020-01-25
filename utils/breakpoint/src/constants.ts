import { Breakpoint } from './types';

export const BREAKPOINTS: Record<Breakpoint, number> = {
  [Breakpoint.Phone]: 0,
  [Breakpoint.TabletPortrait]: 37.5,
  [Breakpoint.TabletLandscape]: 56.25,
  [Breakpoint.Desktop]: 75
};
