const fs = require('fs');
const { resolve } = require('path');
const docgen = require('react-docgen');
const externalProptypesHandler = require('react-docgen-external-proptypes-handler');
const glob = require('glob');

const data = {};

const files = glob.sync(`../marketing-components/src/**/*.{js,jsx}`, {
  ignore: [
    '../marketing-components/src/**/*.{spec,docs,story}.js',
    '../marketing-components/src/**/index.js',
  ],
});
const metadata = {};
files.sort().map((path) => {
  /* append display name handler to handlers list */
  const handlers = docgen.defaultHandlers.concat(externalProptypesHandler(path));

  /* read file to get source code */
  const code = fs.readFileSync(path, 'utf8');

  /* parse the component code to get metadata */
  try {
    const gen = docgen.parse(code, null, handlers);
    metadata[gen.displayName] = gen;
  } catch {
    return false;
  }
  return data;
});

fs.writeFileSync(
  resolve(process.cwd(), 'temp-docgen-output.js'),
  `export default ${JSON.stringify(metadata, null, 2)}`,
);
