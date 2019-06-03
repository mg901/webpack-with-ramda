const development = require('./webpack/dev/config');
const production = require('./webpack/prod/config');
const { IS_DEVELOPMENT } = require('./webpack/constants');

module.exports = IS_DEVELOPMENT ? development : production;
