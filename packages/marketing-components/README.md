[![CircleCI](https://circleci.com/gh/transferwise/marketing-components.svg?style=shield)](https://circleci.com/gh/transferwise/marketing-components) [![NPM](https://badge.fury.io/js/%40transferwise%2Fcomponents.svg)](https://www.npmjs.com/package/@transferwise/marketing-components)

# Neptune Web React Components

Neptune is the Design System built by and used at TransferWise. Neptune Web is the Neptune framework for Web. Neptune Web provides a way to build high quality, consistent user experiences on the web with ease.

This is the Neptune Web React component library. It uses [Neptune CSS](https://github.com/transferwise/marketing-components/tree/master/packages/css).

## Usage

Neptune Components are published to npm as [@transferwise/marketing-components](https://www.npmjs.com/package/@transferwise/marketing-components).

Install `@transferwise/marketing-components` and its peer dependencies. **Note:** currency-flags is only required if you're using the [Money Input](https://transferwise.github.io/marketing-components/components/MoneyInput) or if you're using flags on the [Select](https://transferwise.github.io/marketing-components/components/Select).

```
# yarn
yarn add @transferwise/marketing-components react react-dom prop-types currency-flags

# npm
npm install @transferwise/marketing-components react react-dom prop-types currency-flags
```

```js
// This line only needs to be imported once in your application
import '@transferwise/neptune-css/dist/css/neptune.css';

import { Button } from '@transferwise/marketing-components';

export default function Hello() {
  return (
    <Button size={Button.Size.SMALL} block={true}>
      Hello Neptune
    </Button>
  );
}
```

## Documentation

Visit the [docs](https://transferwise.github.io/marketing-components) for information on getting started, usage information and examples for each component.

## Contributing

We love contribution! 🙏 Read [the guide](https://github.com/transferwise/marketing-components/blob/master/packages/components/CONTRIBUTING.md) to get started.
