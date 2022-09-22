import path from 'path';
import { merge } from 'webpack-merge';

import common, { Configuration } from './webpack.common';

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    static: { directory: path.resolve(__dirname, 'dist') },
    historyApiFallback: true,
    devMiddleware: { stats: 'minimal' },
  },
});

export default config;
