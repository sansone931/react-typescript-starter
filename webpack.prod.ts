import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: { chunks: 'all' },
  },
  plugins: [new CleanWebpackPlugin()],
});

if (process.env.ANALYZE === '1') {
  config.plugins = (config.plugins ?? []).concat(new BundleAnalyzerPlugin());
}

export default config;
