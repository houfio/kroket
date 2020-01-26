import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: 'black',
    colorSecondary: 'black',
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: 'transparent',
    appBorderRadius: 8,
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    textColor: 'black',
    textInverseColor: 'white',
    barTextColor: 'black',
    barSelectedColor: 'black',
    barBg: 'rgba(0,0,0, .05)',
    inputBg: 'rgba(0,0,0, .05)',
    inputBorder: 'transparent',
    inputTextColor: 'black',
    inputBorderRadius: 8,
    brandTitle: 'kroket',
    brandUrl: 'https://github.com/houfio/kroket',
    brandImage: 'https://raw.githubusercontent.com/houfio/kroket/master/logo_small.svg?sanitize=true'
  })
});
