[![CircleCI](https://circleci.com/gh/transferwise/marketing-components.svg?style=shield)](https://circleci.com/gh/transferwise/marketing-components) [![NPM](https://badge.fury.io/js/%40transferwise%2Fcomponents.svg)](https://www.npmjs.com/package/@transferwise/marketing-components)

# Marketing React Components

Marketing Components is built by and used at TransferWise. Marketing provides a way to build high quality, consistent user experiences on the web with ease.

This is the Marketing React component library. It uses [Neptune CSS](https://github.com/transferwise/neptune/tree/main/packages/css).

## Usage

Marketing Components are published to npm as [@transferwise/marketing-components](https://www.npmjs.com/package/@transferwise/marketing-components).

Install `@transferwise/marketing-components` and its peer dependencies.

```
# yarn
yarn add @transferwise/marketing-components react react-dom prop-types

# npm
npm install @transferwise/marketing-components react react-dom prop-types
```

```js
// This line only needs to be imported once in your application
import '@transferwise/neptune-css/dist/css/neptune.css';

import { Button } from '@transferwise/marketing-components';

export default function Hello() {
  return (
    <Button size={Button.Size.SMALL} block={true}>
      Hello Marketing Components
    </Button>
  );
}
```

## Documentation

Visit the [docs](https://transferwise.github.io/marketing-components) for information on getting started, usage information and examples for each component.

## Contributing

We love contribution! 🙏 Read [the guide](https://github.com/transferwise/marketing-components/blob/main/packages/marketing-components/CONTRIBUTING.md) to get started.
