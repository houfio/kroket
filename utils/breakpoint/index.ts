export enum Breakpoint {
  Phone,
  TabletPortrait,
  TabletLandscape,
  Desktop
}

export const BREAKPOINTS: Record<Breakpoint, number> = {
  [Breakpoint.Phone]: 0,
  [Breakpoint.TabletPortrait]: 37.5,
  [Breakpoint.TabletLandscape]: 56.25,
  [Breakpoint.Desktop]: 75
};
