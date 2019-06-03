const R = require('ramda');
const { DIST_DIR, PORT, HOST } = require('../constants');

exports.withServer = R.mergeRight({
  devServer: {
    contentBase: DIST_DIR,
    host: HOST,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    overlay: true,
    noInfo: false,
    quiet: false,
    stats: {
      'errors-only': true,
    },
    clientLogLevel: 'warning',
    compress: true,
    port: PORT,
  },
});
