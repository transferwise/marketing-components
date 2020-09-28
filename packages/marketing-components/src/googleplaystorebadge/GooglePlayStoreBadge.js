import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import './GooglePlayStoreBadge.css';

const androidURL = 'https://play.google.com/store/apps/details?id=com.transferwise.android';

const GooglePlayStoreBadge = ({ centered, alt, language }) => {
  return (
    <a
      className={classnames({ 'tw-google-play-store-badge--centered': centered })}
      href={androidURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="tw-google-play-store-badge__image"
        src={`https://transferwise.com/public-resources/assets/marketing-components/google-play-store-badges/${language.toLowerCase()}.svg`}
        alt={alt}
      />
    </a>
  );
};

GooglePlayStoreBadge.propTypes = {
  alt: Types.string,
  centered: Types.bool,
  language: Types.string,
};

GooglePlayStoreBadge.defaultProps = {
  alt: 'Download from the Google Play Store',
  centered: false,
  language: 'en',
};

export default GooglePlayStoreBadge;
