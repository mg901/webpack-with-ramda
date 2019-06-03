const autoprefixer = require('autoprefixer');
const flexBugsFix = require('postcss-flexbugs-fixes');

module.exports = {
  plugins: [autoprefixer, flexBugsFix],
};
