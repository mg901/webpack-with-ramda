const R = require('ramda');
const { resolve } = require('path');
const { NoEmitOnErrorsPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SRC_DIR, RE } = require('./constants');

exports.common = R.mergeRight({
  context: SRC_DIR,
  resolve: {
    extensions: ['.js', '.jsx', '.svg', '.json'],
    modules: ['node_modules'],
  },
  optimization: {},
  devtool: 'source-map',
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'SMASHDOCs Admin',
      template: resolve(SRC_DIR, 'index.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: RE.js,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: RE.css, use: [] },
      { test: RE.scss, use: [] },
      { test: RE.rasterImages, use: [] },
      { test: RE.svg, use: [] },
      { test: RE.legacyFonts, use: [] },
      { test: RE.actualFonts, use: [] },
    ],
  },
});
