import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: 'dodgerblue',
    colorSecondary: '#24292e',
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: 'transparent',
    appBorderRadius: 8,
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    textColor: 'black',
    textInverseColor: 'rgba(255, 255, 255, .9)',
    barTextColor: 'white',
    barSelectedColor: 'rgba(255, 255, 255, .75)',
    barBg: '#24292e',
    inputBg: '#f3f4f8',
    inputBorder: 'transparent',
    inputTextColor: 'black',
    inputBorderRadius: 8,
    brandTitle: 'kroket',
    brandUrl: 'https://github.com/houfio/kroket',
    brandImage: 'https://raw.githubusercontent.com/houfio/kroket/master/logo_small.svg?sanitize=true'
  })
});
