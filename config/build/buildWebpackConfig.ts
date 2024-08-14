import type webpack from 'webpack';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

import { type IBuildOptions } from './types/config';

export default function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/' // иначе вебпак не находит бандл страниц по id
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
}
