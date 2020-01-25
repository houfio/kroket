import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';

addDecorator(withA11y);
addDecorator(withInfo);
addDecorator(withKnobs);
