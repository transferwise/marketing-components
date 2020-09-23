import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import TrustpilotIllustration from './TrustpilotIllustration';

const Trustpilot = ({ title, linkText, href }) => (
  <TrustElement
    src={<TrustpilotIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
  />
);

Trustpilot.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
};
export default Trustpilot;
