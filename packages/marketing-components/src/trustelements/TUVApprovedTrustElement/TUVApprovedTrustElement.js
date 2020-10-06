import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const TUVApprovedTrustElement = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/tuv.png"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

TUVApprovedTrustElement.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

TUVApprovedTrustElement.defaultProps = {
  useIllustration: true,
};

export default TUVApprovedTrustElement;
