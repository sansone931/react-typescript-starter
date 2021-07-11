import path from 'path';
import { merge } from 'webpack-merge';

import common, { Configuration } from './webpack.common';

const config: Configuration = merge(common, {
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
