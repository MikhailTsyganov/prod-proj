import { type IBuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer({ port }: IBuildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true
  };
}
