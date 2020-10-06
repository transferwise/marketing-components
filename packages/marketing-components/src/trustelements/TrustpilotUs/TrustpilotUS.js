import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import TrustpilotUSIllustration from '../Trustpilot/TrustpilotIllustration';

const TrustpilotUS = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src={<TrustpilotUSIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
    useIllustration={useIllustration}
  />
);

TrustpilotUS.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

TrustpilotUS.defaultProps = {
  useIllustration: true,
};

export default TrustpilotUS;
