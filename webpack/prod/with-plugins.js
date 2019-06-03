const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { pluginsLensWith } = require('../utils');

exports.withPlugins = pluginsLensWith([
  new MiniCssExtractPlugin({
    filename: 'style.[contenthash].css',
  }),
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify('production'),
  }),
]);
