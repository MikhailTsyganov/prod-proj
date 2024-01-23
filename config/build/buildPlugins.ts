import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type IBuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // с помощью definePlugin можно прокидывать глобальные переменные
    new webpack.DefinePlugin({ __IS_DEV__: isDev }),

    // плагин работает по дефолту, насколько Я понял webpack-dev-server делает это из коробки
    // new webpack.HotModuleReplacementPlugin(),

    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ];
}
