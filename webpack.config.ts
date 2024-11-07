import path from 'path';
import type webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import {
  type IBuildOptions,
  type IBuildEnv,
  type IBuildPaths,
} from './config/build/types/config';

const config = (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode = env?.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env?.port || 3000;
  const apiUrl = env?.apiUrl || 'http://localhost:8000';

  const options: IBuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  };

  return buildWebpackConfig(options);
};

export default config;
