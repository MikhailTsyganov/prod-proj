import webpack from "webpack";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

import { IBuildOptions } from "./types/config";

export default function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
