import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import TrustpilotUSIllustration from '../Trustpilot/TrustpilotIllustration';

const TrustpilotUS = ({ title, linkText, href }) => (
  <TrustElement
    src={<TrustpilotUSIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
  />
);

TrustpilotUS.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
};
export default TrustpilotUS;
