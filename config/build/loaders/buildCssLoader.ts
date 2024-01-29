import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from '../types/config';

export function buildCssLoader(isDev: boolean) {
  return {
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
  }
}