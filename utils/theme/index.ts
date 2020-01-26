import { createContext, useContext } from 'react';

export type Theme = {
  primary: string,
  focus: string
};

const context = createContext<Theme>({
  primary: 'rgb(30, 144, 255)',
  focus: 'rgba(30, 144, 255, .5)'
});

export const ThemeProvider = context.Provider;

export function useTheme() {
  return useContext(context);
}
