import { createContext, useContext } from 'react';

export type Theme = {
  primary: string,
  focus: string,
  text: string
};

const context = createContext<Theme>({
  primary: 'rgb(30, 144, 255)',
  focus: 'rgba(30, 144, 255, .5)',
  text: 'white'
});

export const ThemeProvider = context.Provider;

export function useTheme() {
  return useContext(context);
}
