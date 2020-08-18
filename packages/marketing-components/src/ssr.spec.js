/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import * as components from '.';

const excluded = ['useSnackbar'];

function isNotExcluded(componentName) {
  return !excluded.includes(componentName);
}

describe('Server side rendering', () => {
  const componentNames = Object.keys(components).filter(isNotExcluded);

  expect(componentNames.length).toBeGreaterThan(0);

  // stick all possible properties we might need to render all components in here
  const allProps = {
    title: 'title',
    posterUrl: 'posterUrl',
    onDismiss: jest.fn(),
    children: <span />,
    videoId: '1',
    translations: {
      title: '',
      poster: {
        alt: '',
      },
      close: {
        ariaLabel: '',
      },
    },
  };

  componentNames.forEach((componentName) => {
    it(`works for ${componentName} components`, () => {
      const Component = components[componentName];

      const string = renderToString(<Component {...allProps} />);
      expect(string).toEqual(expect.any(String));
    });
  });
});
