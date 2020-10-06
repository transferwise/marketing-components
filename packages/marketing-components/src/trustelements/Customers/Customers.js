import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const Customers = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/customers.svg"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

Customers.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

Customers.defaultProps = {
  useIllustration: true,
};

export default Customers;