import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import { type IBuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl, project }: IBuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev;

  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),

    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),
    // с помощью definePlugin можно прокидывать глобальные переменsные
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    })
    // new BundleAnalyzerPlugin({ openAnalyzer: false })
  ]

  if (isDev) {
    // плагин работает по дефолту, насколько Я понял webpack-dev-server делает это из коробки
    // plugins.push(new webpack.HotModuleReplacementPlugin())

    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new ForkTsCheckerWebpackPlugin())
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))

    plugins.push(new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales }
      ]
    }))
  }

  return plugins;
}
