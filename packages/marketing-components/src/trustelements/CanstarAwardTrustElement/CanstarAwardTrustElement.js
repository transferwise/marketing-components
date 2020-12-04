import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const CanstarAwardTrustElement = ({ title, linkText, href, useIllustration, ...rest }) => (
  <TrustElement
    {...rest}
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/canstar.png"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

CanstarAwardTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

CanstarAwardTrustElement.defaultProps = {
  useIllustration: true,
};

export default CanstarAwardTrustElement;
