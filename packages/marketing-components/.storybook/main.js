const path = require('path');

const isPostcssLoader = (l) =>
  l === 'postcss-loader' || (l.loader && l.loader.includes('postcss-loader'));

const ruleHasPostcssLoader = (r) => {
  const loadersWithPostCss =
    r.hasOwnProperty('use') && Array.isArray(r.use) && r.use.filter(isPostcssLoader);
  if (loadersWithPostCss.length) return true;
  return false;
};

module.exports = {
  webpackFinal: async (config) => {
    console.log(config.module.rules);

    // Remove the existing css rule
    config.module.rules = config.module.rules.flatMap((rule) => {
      if (!ruleHasPostcssLoader(rule)) return [rule];

      // For each rule found with postcss-loader in it, create an array of new rules to
      // replace the one rule. The new array includes one rule for loaders before postcss,
      // one rule for postcss that excludes node_modules, and (optionally) one rule for
      // any loaders after postcss.

      // Get the index of postcss-loader in the array of loaders
      const postcssIndex = rule.use.findIndex(isPostcssLoader);

      // Define new rules
      return [
        // Loaders before postcss-loader
        {
          ...rule,
          use: rule.use.slice(0, postcssIndex),
        },
        // New postcss-loader
        {
          ...rule,
          exclude: /node_modules/,
          use: [rule.use[postcssIndex]],
        },
        // Append any loaders after postcss-loader
        Boolean(rule.use.length > postcssIndex + 1) && {
          ...rule,
          use: rule.use.slice(postcssIndex + 1),
        },
      ].filter(Boolean);
    });

    // Return the altered config
    return config;
  },
};
