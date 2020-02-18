import { addParameters } from '@storybook/react';
import { DocsPage } from 'storybook-addon-deps/blocks/DocsPage';

addParameters({
  options: {
    showRoots: true
  },
  docs: {
    page: DocsPage
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true
  }
});
