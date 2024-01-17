import type webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type IBuildOptions } from './types/config';

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
  // woff - шрифты
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  // Svg inline loader перестал использоваться, вместо него используется svgr loader
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // "style-loader",
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path]__[name]_[local]--[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  };

  // если не используется typescriptLoader - нужно добавить babelLoader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [fileLoader, svgLoader, typescriptLoader, sassLoader];
}
