const esConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0.0',
        // targets: {
        //   browsers: please check browserlistrc
        // },
        modules: false,
      },
    ],
    ['minify', { builtIns: false, mangle: { exclude: { separators: true } } }],
  ],
};

const esConfigNoPolyfill = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: false, modules: false }],
    ['minify', { builtIns: false, mangle: { exclude: { separators: true } } }],
  ],
};

const testConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

module.exports = {
  // "unambiguous" - Consider the file a "module" if import/export statements are present, or else consider it a "script".
  sourceType: 'unambiguous',
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-runtime',
  ],
  env: {
    test: testConfig,
    es: esConfig,
    'es-nopolyfill': esConfigNoPolyfill,
  },
};
