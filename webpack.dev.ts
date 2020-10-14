import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    stats: 'minimal',
  },
});

export default config;
