import React from 'react';
import Types from 'prop-types';

import './AppStoreBadge.css';

const AppStoreBadge = ({ language, alt, ...rest }) => {
  const iosURL = 'https://apps.apple.com/app/id612261027';

  return (
    <a {...rest} href={iosURL} target="_blank" rel="noopener noreferrer">
      <img
        className="tw-app-store-badge__image"
        src={`https://wise.com/public-resources/assets/marketing-components/app-store-badges/${language.toLowerCase()}.svg`}
        alt={alt}
      />
    </a>
  );
};

AppStoreBadge.propTypes = {
  language: Types.string.isRequired,
  alt: Types.string.isRequired,
};

export default AppStoreBadge;
