import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { Configuration, DefinePlugin, type RuleSetRule } from 'webpack';

export default {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-themes',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {},
    },
  },

  docs: {},

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  webpackFinal: async (config: Configuration) => {
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '..', '..', './src'),
      ];
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@': path.resolve(__dirname, '..', '..', './src'),
      };

      config.resolve.extensions!.push('.ts', '.tsx');
    }
    if (config.module) {
      const rules = config.module.rules as RuleSetRule[];
      config.module.rules = rules.map((rule) =>
        /svg/.test(rule.test as string)
          ? { ...rule, exclude: /\.svg$/i }
          : rule,
      );

      config.module.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      config.module.rules?.push(buildCssLoader(true));
    }

    config.plugins?.push(
      new DefinePlugin({ __IS_DEV__: JSON.stringify(true) }),
    );
    config.plugins?.push(
      new DefinePlugin({ __API__: JSON.stringify('https://testapi.ru') }),
    );
    config.plugins?.push(
      new DefinePlugin({ __PROJECT__: JSON.stringify('storybook') }),
    );

    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
