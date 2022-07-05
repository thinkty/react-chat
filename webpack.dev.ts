import 'webpack-dev-server';
import * as path from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import commonConfiguration from './webpack.common';

module.exports = merge(commonConfiguration, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'src'),
    open: true,
    port: 9000,
    hot: true,
    watchFiles: ['src/**/*'],
  },
});