import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const BrazilianLicenseTrustElement = ({ title, linkText, href, useIllustration, ...rest }) => (
  <TrustElement
    {...rest}
    src="https://wise.com/public-resources/assets/spot-illustrations/banking.svg"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

BrazilianLicenseTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

BrazilianLicenseTrustElement.defaultProps = {
  useIllustration: true,
};

export default BrazilianLicenseTrustElement;
