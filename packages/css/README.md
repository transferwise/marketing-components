[![CircleCI](https://circleci.com/gh/transferwise/marketing-components.svg?style=shield)](https://circleci.com/gh/transferwise/marketing-components) [![NPM](https://badge.fury.io/js/%40transferwise%2Fmarketing-css.svg)](https://www.npmjs.com/package/@transferwise/marketing-css)

# Marketing CSS

Marketing CSS Components are meant to use in combination with <a href="https://transferwise.github.io/neptune-web/styles">Neptune-css</a>
Learn <a href="https://transferwise.github.io/neptune-web/about/Styles"> here the basics</a>.

These components are particularly used in public marketing pages and some of them have been deprecated from general `neptune-css` bundle, which has a product orientation.

Other components, as the `Grid Layout` system, it's brand new for marketing purposes, a lightweight simple way to create layouts. This system doesn't support IE11 so take that into account when you have to take decisions.

## Usage

Marketing CSS components are published to npm as [@transferwise/marketing-css](https://www.npmjs.com/package/@transferwise/marketing-css).

Install `@transferwise/marketing-css` and its peer dependencies.

```
# yarn
yarn add @transferwise/marketing-css 

# npm
npm install @transferwise/marketing-css 
```

The components are ready to import individually in your CSS or compile process (webpack/gulp/...)

```
import '@transferwise/marketing-css/dist/css/grid-layout.css';
```
