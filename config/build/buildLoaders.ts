import type webpack from 'webpack';
import { type IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

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

  const sassLoader = buildCssLoader(isDev);

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  // если не используется typescriptLoader - нужно добавить babelLoader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, sassLoader];
}
