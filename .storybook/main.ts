import { Configuration } from 'webpack';

module.exports = {
  stories: [
    '../components/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y'
  ],
  webpackFinal: (config: Configuration) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module!.rules,
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve('ts-loader')
            },
            {
              loader: require.resolve('react-docgen-typescript-loader')
            }
          ]
        }
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [
        ...(config.resolve!.extensions || []),
        '.ts',
        '.tsx'
      ]
    }
  })
};
