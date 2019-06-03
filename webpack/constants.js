const { resolve } = require('path');

const SRC_DIR = resolve(__dirname, '../src');
const DIST_DIR = resolve(__dirname, '../dist');
const POSTCSS = resolve(__dirname, '../postcss.config.js');

const PORT = 9000;
const HOST = 'localdev.smashdocs.net';
const PROTOCOL = 'https';
const APP_URL = `${PROTOCOL}://${HOST}:${PORT}/`;
const API_URL = 'https://feature5.smashdocs.net';

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const RE = {
  js: /\.(js|jsx)$/,
  css: /\.css$/,
  scss: /\.scss$/,
  rasterImages: /\.(jpe?g|png|gif)$/,
  svg: /\.svg$/,
  legacyFonts: /\.(otf|ttf|eot)(\?[a-z0-9#=&.]+)?$/,
  actualFonts: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
};

module.exports = {
  SRC_DIR,
  DIST_DIR,
  POSTCSS,
  PORT,
  HOST,
  APP_URL,
  API_URL,
  RE,
  IS_DEVELOPMENT,
};
