import { type ResolveOptions } from 'webpack';
import { type IBuildOptions } from './types/config';

export function buildResolvers({ paths }: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.src, 'node_modules'],
    preferAbsolute: true,
    mainFiles: ['index'],
    alias: {}
  };
}
