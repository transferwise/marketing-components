const esConfigNoPolyfill = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: false, modules: false }],
    ['minify', { builtIns: false, mangle: { exclude: { separators: true } } }],
  ],
};

const umdConfigNoPolyfill = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Don't add polyfills automatically per file, and don't transform import "core-js" or import "@babel/polyfill" to individual polyfills.
        useBuiltIns: false,
        modules: false,
      },
    ],
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
    'es-nopolyfill': esConfigNoPolyfill,
    'umd-nopolyfill': umdConfigNoPolyfill,
  },
};
