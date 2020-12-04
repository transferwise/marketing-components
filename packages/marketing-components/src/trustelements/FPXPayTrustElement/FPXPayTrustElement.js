import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const FPXPayTrustElement = ({ title, linkText, href, alt, useIllustration, ...rest }) => (
  <TrustElement
    {...rest}
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/fpx.png"
    title={title}
    linkText={linkText}
    href={href}
    alt={alt}
    useIllustration={useIllustration}
  />
);

FPXPayTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  alt: Types.oneOfType([Types.element, Types.string]),
  useIllustration: Types.bool,
};

FPXPayTrustElement.defaultProps = {
  alt: '',
  useIllustration: true,
};

export default FPXPayTrustElement;
