import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'kroket',
    brandUrl: 'https://github.com/houfio/kroket',
    brandImage: 'https://raw.githubusercontent.com/houfio/kroket/master/logo_small.svg?sanitize=true'
  })
});
