import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import GooglePlayStoreBadge from './';

describe('GooglePlayStoreBadge', () => {
  it('renders', () => {
    expect(() => render(<GooglePlayStoreBadge />)).not.toThrow();
  });

  it('has a correct Google Play Store url', () => {
    const { getByAltText } = render(<GooglePlayStoreBadge alt="Google Play Store" />);

    expect(getByAltText('Google Play Store').closest('a')).toHaveAttribute(
      'href',
      'https://play.google.com/store/apps/details?id=com.transferwise.android',
    );
  });

  it('has a correct image', () => {
    const { getByAltText } = render(
      <GooglePlayStoreBadge alt="Google Play Store" language="pt_PT" />,
    );

    expect(getByAltText('Google Play Store')).toHaveAttribute(
      'src',
      'https://transferwise.com/public-resources/assets/marketing-components/google-play-store-badges/pt_pt.svg',
    );
  });

  it('does not center the badge by default', () => {
    const { getByAltText } = render(<GooglePlayStoreBadge alt="Google Play Store" />);

    expect(getByAltText('Google Play Store').closest('a')).not.toHaveAttribute(
      'class',
      'tw-google-play-store-badge--centered',
    );
  });

  it('centers the badge if centered prop is passed', () => {
    const { getByAltText } = render(<GooglePlayStoreBadge alt="Google Play Store" centered />);

    expect(getByAltText('Google Play Store').closest('a')).toHaveAttribute(
      'class',
      'tw-google-play-store-badge--centered',
    );
  });
});
