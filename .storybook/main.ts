import { Configuration } from 'webpack';

module.exports = {
  stories: [
    '../components/**/*.stories.tsx'
  ],
  presets: [
    'storybook-addon-deps/preset'
  ],
  addons: [
    '@storybook/addon-docs'
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
