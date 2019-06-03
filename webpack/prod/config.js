const R = require('ramda');
const { common } = require('../common.config');
const { withPlugins } = require('./with-plugins');
const { withRules } = require('./with-rules');
const { withOptimizations } = require('./with-optimizations');
const { bundleWith } = require('../bundle');

const bundle = bundleWith({
  filename: '[name].[chunkhash].js',
  publicPath: '/admin',
});

module.exports = R.compose(
  R.mergeRight(bundle),
  withRules,
  withPlugins,
  withOptimizations,
  common,
)({
  mode: 'production',
  entry: {
    main: ['whatwg-fetch', 'babel-polyfill', './index.js'],
  },
  watch: false,
});
