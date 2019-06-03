const R = require('ramda');
const { APP_URL } = require('../constants');
const { common } = require('../common.config');
const { withServer } = require('./with-server');
const { withRules } = require('./with-rules');
const { withPlugins } = require('./with-plugins');
const { bundle } = require('../bundle');

module.exports = R.compose(
  R.mergeRight(bundle),
  withRules,
  withPlugins,
  withServer,
  common,
)({
  mode: 'development',
  entry: {
    main: [
      'whatwg-fetch',
      'babel-polyfill',
      `webpack-dev-server/client?${APP_URL}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './index.js',
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
});
