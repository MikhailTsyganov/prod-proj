import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type IBuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // с помощью definePlugin можно прокидывать глобальные переменные
    new webpack.DefinePlugin({ __IS_DEV__: isDev })
    // new BundleAnalyzerPlugin({ openAnalyzer: false })
  ]

  if (isDev) {
    // плагин работает по дефолту, насколько Я понял webpack-dev-server делает это из коробки
    // plugins.push(new webpack.HotModuleReplacementPlugin())

    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
  }

  return plugins;
}
