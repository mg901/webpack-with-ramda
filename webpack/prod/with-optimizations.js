const R = require('ramda');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

exports.withOptimizations = R.over(
  R.lensProp('optimization'),
  R.mergeRight({
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  }),
);
