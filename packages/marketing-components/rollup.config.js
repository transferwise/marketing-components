import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

// Rollup
const input = 'src/index.js';
const file = pkg.main;

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};

// Plugins
const plugins = [
  // Resolves modules from node_modules
  resolve(),
  babel({
    babelHelpers: 'runtime',
    exclude: [/node_modules/],
  }),
  // Convert CJ into ES6
  commonjs({ sourcemap: false }),
  postcss({
    config: true,
    extract: pkg.style,
    extensions: ['.css'],
  }),
  uglify(),
];

export default [
  {
    input,
    output: [{ file, name: pkg.name, format: 'umd', globals }],
    external: [
      ...Object.keys(pkg.devDependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins,
  },
];
