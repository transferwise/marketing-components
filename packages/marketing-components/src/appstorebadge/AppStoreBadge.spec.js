import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import AppStoreBadge from './';

describe('AppStoreBadge', () => {
  it('renders', () => {
    expect(() => render(<AppStoreBadge />)).not.toThrow();
  });

  it('has a correct App Store url by default', () => {
    const { getByAltText } = render(<AppStoreBadge alt="App Store" />);

    expect(getByAltText('App Store').closest('a')).toHaveAttribute(
      'href',
      'https://itunes.apple.com/gb/app/transferwise-money-transfer/id612261027',
    );
  });

  it('has a correct App Store url for US locale', () => {
    const { getByAltText } = render(<AppStoreBadge alt="App Store" locale="us" />);

    expect(getByAltText('App Store').closest('a')).toHaveAttribute(
      'href',
      'https://itunes.apple.com/us/app/transferwise-money-transfer/id612261027',
    );
  });

  it('has a correct image', () => {
    const { getByAltText } = render(<AppStoreBadge alt="App Store" language="pt_PT" />);

    expect(getByAltText('App Store')).toHaveAttribute(
      'src',
      'https://transferwise.com/public-resources/assets/marketing-components/app-store-badges/pt_pt.svg',
    );
  });

  it('does not center the badge by default', () => {
    const { getByAltText } = render(<AppStoreBadge alt="App Store" />);

    expect(getByAltText('App Store').closest('a')).not.toHaveAttribute(
      'class',
      'tw-app-store-badge--centered',
    );
  });

  it('centers the badge if centered prop is passed', () => {
    const { getByAltText } = render(<AppStoreBadge alt="App Store" centered />);

    expect(getByAltText('App Store').closest('a')).toHaveAttribute(
      'class',
      'tw-app-store-badge--centered',
    );
  });
});
