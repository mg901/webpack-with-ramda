const { DIST_DIR, APP_URL } = require('./constants');

const bundle = {
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: APP_URL,
  },
};

const bundleWith = (params) => ({
  ...bundle,
  output: {
    ...bundle.output,
    ...params,
  },
});

module.exports = {
  bundle,
  bundleWith,
};
