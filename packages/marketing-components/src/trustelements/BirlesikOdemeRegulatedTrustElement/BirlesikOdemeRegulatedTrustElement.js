import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import SecurityIllustration from '../SecurityIllustration';

const BirlesikOdemeRegulatedTrustElement = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src={<SecurityIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
    useIllustration={useIllustration}
  />
);

BirlesikOdemeRegulatedTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]),
  href: Types.string,
  useIllustration: Types.bool,
};

BirlesikOdemeRegulatedTrustElement.defaultProps = {
  useIllustration: true,
  linkText: null,
  href: null,
};

export default BirlesikOdemeRegulatedTrustElement;
