import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: { app: path.resolve(__dirname, 'src/index.tsx') },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};

export default config;
