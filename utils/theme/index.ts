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
  cardActive: string,
  error: string
};

const context = createContext<Theme>({
  primary: '#1e90ff',
  focus: '#8ec7ff',
  background: 'white',
  foreground: 'black',
  backdrop: 'rgba(0, 0, 0, .5)',
  borderRadius: '.5rem',
  card: '#f7f7f7',
  cardHover: '#ebebeb',
  cardActive: '#e1e1e1',
  error: '#ff7980'
});

export const ThemeProvider = context.Provider;

export function useTheme() {
  return useContext(context);
}
