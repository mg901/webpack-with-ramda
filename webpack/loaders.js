const { POSTCSS } = require('./constants');

exports.styleLoader = 'style-loader';
exports.resolveUrlLoader = 'resolve-url-loader';

exports.cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
  },
};

exports.postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    config: {
      path: POSTCSS,
    },
  },
};

exports.sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  },
};

exports.fileLoader = {
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
  },
};

exports.urlLoader = {
  loader: 'url-loader',
  options: {
    name: '[name].[ext]',
    limit: 10000,
  },
};

exports.imgLoader = {
  loader: 'img-loader',
  options: {
    svgo: {
      plugins: [
        { removeTitle: true },
        { cleanupIDs: false },
        { convertPathData: false },
      ],
    },
  },
};
