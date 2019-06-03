const webpack = require('webpack');
const { pluginsLensWith } = require('../utils');

exports.withPlugins = pluginsLensWith([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify('development'),
  }),
]);
