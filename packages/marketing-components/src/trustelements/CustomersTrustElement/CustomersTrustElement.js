import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const CustomersTrustElement = ({ title, linkText, href, useIllustration, ...rest }) => (
  <TrustElement
    {...rest}
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/customers.svg"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

CustomersTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

CustomersTrustElement.defaultProps = {
  useIllustration: true,
};

export default CustomersTrustElement;
