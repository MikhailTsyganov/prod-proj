import path from 'path';
import type webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { type IBuildEnv, type IBuildPaths } from './config/build/types/config';

const config = (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000'

  const options = { mode, paths, isDev, port: PORT, apiUrl };

  return buildWebpackConfig(options);
};

export default config;
