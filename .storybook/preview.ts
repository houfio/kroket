import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';

addDecorator(withA11y);
addDecorator(withInfo);
addDecorator(withKnobs);
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
