module.exports = {
  'lint-staged': {
    '*.{json,js,jsx,eslintrc,css,scss}': ['prettier --write', 'git add'],
  },
};
