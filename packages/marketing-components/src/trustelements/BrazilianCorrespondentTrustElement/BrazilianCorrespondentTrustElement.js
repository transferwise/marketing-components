import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import SecurityIllustration from '../SecurityIllustration';

const BrazilianCorrespondentTrustElement = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src={<SecurityIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
    useIllustration={useIllustration}
  />
);

BrazilianCorrespondentTrustElement.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

BrazilianCorrespondentTrustElement.defaultProps = {
  useIllustration: true,
};

export default BrazilianCorrespondentTrustElement;
