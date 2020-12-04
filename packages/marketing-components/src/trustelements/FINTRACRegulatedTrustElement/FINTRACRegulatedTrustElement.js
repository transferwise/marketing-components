import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import SecurityIllustration from '../SecurityIllustration';

const FINTRACRegulatedTrustElement = ({ title, linkText, href, useIllustration, ...rest }) => (
  <TrustElement
    src={<SecurityIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
    useIllustration={useIllustration}
    {...rest}
  />
);

FINTRACRegulatedTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

FINTRACRegulatedTrustElement.defaultProps = {
  useIllustration: true,
};

export default FINTRACRegulatedTrustElement;
