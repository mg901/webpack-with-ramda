const { RE } = require('../constants');
const {
  styleLoader,
  cssLoader,
  resolveUrlLoader,
  postcssLoader,
  sassLoader,
  imgLoader,
  urlLoader,
  fileLoader,
} = require('../loaders');
const { customizeLoader, useLensWith, rulesLensWith } = require('../utils');

const urlLoaderWith = customizeLoader(urlLoader);
const fileLoaderWith = customizeLoader(fileLoader);

const makeCss = useLensWith([
  styleLoader,
  cssLoader,
  resolveUrlLoader,
  postcssLoader,
]);

const makeScss = useLensWith([
  styleLoader,
  cssLoader,
  resolveUrlLoader,
  postcssLoader,
  sassLoader,
]);

const makeRasterImages = useLensWith([
  urlLoaderWith({ outputPath: 'img/' }),
  imgLoader,
]);

const makeSvg = useLensWith([
  fileLoaderWith({ outputPath: 'img/' }),
  imgLoader,
]);

const makeLegasyFonts = useLensWith([fileLoaderWith({ outputPath: 'fonts/' })]);

const makeActualFonts = useLensWith([
  urlLoaderWith({
    outputPath: 'fonts/',
    mimetype: 'application/font-woff',
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
    case RE.legacyFonts:
      return makeLegasyFonts(rule);
    case RE.actualFonts:
      return makeActualFonts(rule);
    default:
      return rule;
  }
};

exports.withRules = rulesLensWith(setRules);
