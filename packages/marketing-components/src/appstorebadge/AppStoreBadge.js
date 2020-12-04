import React from 'react';
import Types from 'prop-types';

import './AppStoreBadge.css';

const AppStoreBadge = ({ language, locale, alt, ...rest }) => {
  const appStoreLocale = locale === 'us' ? 'us' : 'gb';
  const iosURL = `https://itunes.apple.com/${appStoreLocale}/app/transferwise-money-transfer/id612261027`;

  return (
    <a {...rest} href={iosURL} target="_blank" rel="noopener noreferrer">
      <img
        className="tw-app-store-badge__image"
        src={`https://transferwise.com/public-resources/assets/marketing-components/app-store-badges/${language.toLowerCase()}.svg`}
        alt={alt}
      />
    </a>
  );
};

AppStoreBadge.propTypes = {
  locale: Types.string.isRequired,
  language: Types.string.isRequired,
  alt: Types.string.isRequired,
};

export default AppStoreBadge;
