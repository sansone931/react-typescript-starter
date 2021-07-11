import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import common, { Configuration } from './webpack.common';

const config: Configuration = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: { chunks: 'all' },
  },
});

if (process.env.ANALYZE === '1') {
  config.plugins = (config.plugins ?? []).concat(new BundleAnalyzerPlugin());
}

export default config;
