import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import TrustpilotUSIllustration from '../TrustpilotTrustElement/TrustpilotIllustration';

const TrustpilotUSTrustElement = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src={<TrustpilotUSIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
    useIllustration={useIllustration}
  />
);

TrustpilotUSTrustElement.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

TrustpilotUSTrustElement.defaultProps = {
  useIllustration: true,
};

export default TrustpilotUSTrustElement;
