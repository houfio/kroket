import { createContext, useContext } from 'react';

export type Theme = {
  primary: string,
  focus: string,
  background: string,
  foreground: string,
  backdrop: string,
  borderRadius: string,
  card: string,
  cardHover: string,
  cardActive: string
};

const context = createContext<Theme>({
  primary: 'rgb(30, 144, 255)',
  focus: 'rgba(30, 144, 255, .5)',
  background: 'white',
  foreground: 'black',
  backdrop: 'rgba(0, 0, 0, .5)',
  borderRadius: '.5rem',
  card: '#f7f7f7',
  cardHover: '#ebebeb',
  cardActive: '#e1e1e1'
});

export const ThemeProvider = context.Provider;

export function useTheme() {
  return useContext(context);
}
