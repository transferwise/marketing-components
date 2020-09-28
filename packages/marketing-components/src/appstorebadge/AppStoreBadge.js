import React from 'react';
import classnames from 'classnames';
import Types from 'prop-types';

import './AppStoreBadge.css';

const AppStoreBadge = ({ language, locale, centered, alt }) => {
  const appStoreLocale = locale === 'us' ? 'us' : 'gb';
  const iosURL = `https://itunes.apple.com/${appStoreLocale}/app/transferwise-money-transfer/id612261027`;

  return (
    <a
      className={classnames({ 'tw-app-store-badge--centered': centered })}
      href={iosURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="tw-app-store-badge__image"
        src={`https://transferwise.com/public-resources/assets/marketing-components/app-store-badges/${language.toLowerCase()}.svg`}
        alt={alt}
      />
    </a>
  );
};

AppStoreBadge.propTypes = {
  locale: Types.string,
  language: Types.string,
  centered: Types.bool,
  alt: Types.string,
};

AppStoreBadge.defaultProps = {
  locale: 'gb',
  language: 'en',
  centered: false,
  alt: 'Download from the Apple App Store',
};

export default AppStoreBadge;
