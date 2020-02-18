import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';

import { Theme, ThemeProvider } from '../utils/theme';

const { withContexts } = require('@storybook/addon-contexts/react');
const redTheme: Theme = {
  primary: 'rgb(255, 99, 71)',
  focus: 'rgba(255, 99, 71, .5)',
  text: 'white'
};

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withContexts([{
  icon: 'star',
  title: 'Theme',
  components: [
    ThemeProvider
  ],
  params: [
    {
      name: 'Red',
      props: {
        value: redTheme
      }
    }
  ],
  options: {
    cancelable: true
  }
}]));

addParameters({
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: false
        }
      ]
    }
  }
});
