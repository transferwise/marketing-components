import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import GooglePlayStoreBadge from './';

describe('GooglePlayStoreBadge', () => {
  it('renders', () => {
    expect(() =>
      render(<GooglePlayStoreBadge alt="Google Play Store" language="de" />),
    ).not.toThrow();
  });

  it('has a correct Google Play Store url', () => {
    const { getByAltText } = render(<GooglePlayStoreBadge alt="Google Play Store" language="de" />);

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
      'https://wise.com/public-resources/assets/marketing-components/google-play-store-badges/pt_pt.svg',
    );
  });
});
