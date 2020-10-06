import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const FPXPay = ({ title, linkText, href, alt, useIllustration }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/fpx.png"
    title={title}
    linkText={linkText}
    href={href}
    alt={alt}
    useIllustration={useIllustration}
  />
);

FPXPay.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  alt: Types.string,
  useIllustration: Types.bool,
};

FPXPay.defaultProps = {
  alt: '',
  useIllustration: true,
};

export default FPXPay;
