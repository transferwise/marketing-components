require('postcss-import');
require('autoprefixer');
require('@arshaw/postcss-custom-properties');
require('postcss-custom-media');
require('cssnano');

module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    '@arshaw/postcss-custom-properties': {
      importFrom: ['../../node_modules/@transferwise/neptune-css/dist/props/neptune-tokens.css'],
      preserveWithFallback: true,
    },
    'postcss-custom-media': {
      stage: 1,
      importFrom: ['../../node_modules/@transferwise/neptune-css/dist/props/custom-media.css'],
    },
    cssnano: {
      preset: 'default',
    },
  },
};
