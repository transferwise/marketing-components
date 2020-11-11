import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Link from './';

describe('Link', () => {
  it('renders', () => {
    expect(() => render(<Link href="https://transferwise.com">Example</Link>)).not.toThrow();
  });
});
