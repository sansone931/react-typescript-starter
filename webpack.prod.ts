import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [new CleanWebpackPlugin()],
});

export default config;
