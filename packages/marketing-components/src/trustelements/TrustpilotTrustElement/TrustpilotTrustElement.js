import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import TrustpilotIllustration from './TrustpilotIllustration';

const TrustpilotTrustElement = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src={<TrustpilotIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
    useIllustration={useIllustration}
  />
);

TrustpilotTrustElement.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

TrustpilotTrustElement.defaultProps = {
  useIllustration: true,
};

export default TrustpilotTrustElement;
