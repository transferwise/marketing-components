module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
      stage: 1,
    },
  },
};
