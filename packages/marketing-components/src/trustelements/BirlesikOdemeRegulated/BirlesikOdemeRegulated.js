import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import SecurityIllustration from '../SecurityIllustration';

const BirlesikOdemeRegulated = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src={<SecurityIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
    useIllustration={useIllustration}
  />
);

BirlesikOdemeRegulated.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

BirlesikOdemeRegulated.defaultProps = {
  useIllustration: true,
};

export default BirlesikOdemeRegulated;