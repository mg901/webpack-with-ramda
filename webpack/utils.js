const R = require('ramda');

exports.customizeLoader = ({ options, ...loader }) => (obj) => ({
  ...loader,
  options: {
    ...options,
    ...obj,
  },
});

exports.useLensWith = (rules) => R.over(R.lensProp('use'), R.concat(rules));

exports.rulesLensWith = (fn) =>
  R.over(R.lensPath(['module', 'rules']), R.map(fn));

exports.pluginsLensWith = (plugins) =>
  R.over(R.lensProp('plugins'), R.concat(plugins));
