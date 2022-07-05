import * as path from 'path';
import { merge } from 'webpack-merge';
import commonConfiguration from './webpack.common';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(commonConfiguration, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
  ],
});