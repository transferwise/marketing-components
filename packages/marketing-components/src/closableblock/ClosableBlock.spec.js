import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import ClosableBlock from './';

describe('ClosableBlock', () => {
  it('renders', () => {
    expect.assertions(1);

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });

    expect(() =>
      render(
        <ClosableBlock
          headingLevel="h2"
          heading="heading"
          body="body"
          src="https://transferwise.com/public-resources/assets/public-navigation/phone_number.svg"
        />,
      ),
    ).not.toThrow();
  });

  describe('at small screen sizes', () => {
    it('can be opened', () => {
      expect.assertions(2);

      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({
          matches: false,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        })),
      });

      const { queryByText } = render(
        <ClosableBlock
          headingLevel="h2"
          heading="heading"
          body="body"
          src="https://transferwise.com/public-resources/assets/public-navigation/phone_number.svg"
        />,
      );

      const heading = queryByText(/heading/i);

      expect(queryByText(/body/i)).not.toBeVisible();

      fireEvent.click(heading);

      expect(queryByText(/body/i)).toBeVisible();
    });
  });

  describe('at large screen sizes', () => {
    it('cannot be closed', () => {
      expect.assertions(2);

      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({
          matches: true,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        })),
      });

      const { queryByText } = render(
        <ClosableBlock
          headingLevel="h2"
          heading="heading"
          body="body"
          src="https://transferwise.com/public-resources/assets/public-navigation/phone_number.svg"
        />,
      );

      const heading = queryByText(/heading/i);

      expect(queryByText(/body/i)).toBeVisible();

      fireEvent.click(heading);

      expect(queryByText(/body/i)).toBeVisible();
    });
  });
});
