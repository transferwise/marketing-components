import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const FSRAApprovedTrustElement = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/FCA.svg"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

FSRAApprovedTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

FSRAApprovedTrustElement.defaultProps = {
  useIllustration: true,
};

export default FSRAApprovedTrustElement;
