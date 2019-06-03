const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { RE } = require('../constants');

const {
  cssLoader,
  resolveUrlLoader,
  postcssLoader,
  sassLoader,
  imgLoader,
  urlLoader,
  fileLoader,
} = require('../loaders');
const { customizeLoader, useLensWith, rulesLensWith } = require('../utils');

const cssLoaderWith = customizeLoader(cssLoader);
const postcssLoaderWith = customizeLoader(postcssLoader);
const sassLoaderWith = customizeLoader(sassLoader);
const urlLoaderWith = customizeLoader(urlLoader);
const fileLoaderWith = customizeLoader(fileLoader);

const makeCss = useLensWith([
  MiniCssExtractPlugin.loader,
  cssLoaderWith({ sourceMap: false }),
  resolveUrlLoader,
  postcssLoaderWith({ sourceMap: false }),
]);

const makeScss = useLensWith([
  MiniCssExtractPlugin.loader,
  cssLoaderWith({ sourceMap: false }),
  resolveUrlLoader,
  postcssLoaderWith({ sourceMap: false }),
  sassLoaderWith({ sourceMap: false }),
]);

const makeRasterImages = useLensWith([
  urlLoaderWith({ outputPath: 'img/', name: '[name].[hash].[ext]' }),
  imgLoader,
]);

const makeSvg = useLensWith([
  urlLoaderWith({ outputPath: 'img/', name: '[name].[hash].[ext]' }),
  imgLoader,
]);

const makeLegasyFonts = useLensWith([
  fileLoaderWith({ outputPath: 'fonts/', name: '[name].[chunkhash].[ext]' }),
]);

const makeActualFonts = useLensWith([
  urlLoaderWith({
    outputPath: 'fonts/',
    mimetype: 'application/font-woff',
    name: '[name].[chunkhash].[ext]',
  }),
]);

const setRules = (rule) => {
  switch (rule.test) {
    case RE.css:
      return makeCss(rule);
    case RE.scss:
      return makeScss(rule);
    case RE.rasterImages:
      return makeRasterImages(rule);
    case RE.svg:
      return makeSvg(rule);
    case RE.legasyFonts:
      return makeLegasyFonts(rule);
    case RE.actualFonts:
      return makeActualFonts(rule);
    default:
      return rule;
  }
};

exports.withRules = rulesLensWith(setRules);
