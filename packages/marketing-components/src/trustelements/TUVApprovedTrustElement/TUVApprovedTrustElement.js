import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const TUVApprovedTrustElement = ({ title, linkText, href, useIllustration, ...rest }) => (
  <TrustElement
    {...rest}
    src="https://wise.com/public-resources/assets/marketing-components/illustrations/tuv.png"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

TUVApprovedTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

TUVApprovedTrustElement.defaultProps = {
  useIllustration: true,
};

export default TUVApprovedTrustElement;
