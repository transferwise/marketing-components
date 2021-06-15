import React from 'react';
import Types from 'prop-types';

import './GooglePlayStoreBadge.css';

const androidURL = 'https://play.google.com/store/apps/details?id=com.transferwise.android';

const GooglePlayStoreBadge = ({ alt, language, ...rest }) => {
  return (
    <a {...rest} href={androidURL} target="_blank" rel="noopener noreferrer">
      <img
        className="tw-google-play-store-badge__image"
        src={`https://wise.com/public-resources/assets/marketing-components/google-play-store-badges/${language.toLowerCase()}.svg`}
        alt={alt}
      />
    </a>
  );
};

GooglePlayStoreBadge.propTypes = {
  alt: Types.string.isRequired,
  language: Types.string.isRequired,
};

export default GooglePlayStoreBadge;
