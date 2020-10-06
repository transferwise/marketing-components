import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const FSRAApproved = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/FCA.svg"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

FSRAApproved.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

FSRAApproved.defaultProps = {
  useIllustration: true,
};

export default FSRAApproved;
