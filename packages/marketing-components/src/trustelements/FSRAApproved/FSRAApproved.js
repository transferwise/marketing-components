import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const FSRAApproved = ({ title, linkText, href }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/FCA.svg"
    title={title}
    linkText={linkText}
    href={href}
  />
);
FSRAApproved.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
};

export default FSRAApproved;
