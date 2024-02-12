import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { DefinePlugin, type RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  // TODO: Что здесь происходит?
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '..', '..', './src')
      ];
    }
    if (config.module) {
      config.module.rules?.push(buildCssLoader(true))

      config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      });

      config.module.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
    }

    config.plugins.push(new DefinePlugin({ __IS_DEV__: JSON.stringify(true) }))
    config.plugins.push(new DefinePlugin({ __API__: JSON.stringify('') }))

    return config;
  }
};
export default config;
