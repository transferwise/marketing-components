import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import SecurityIllustration from '../securityillustration';

const ASICRegulated = ({ title, linkText, href }) => (
  <TrustElement
    src={<SecurityIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
  />
);

ASICRegulated.propTypes = {
    title: Types.string.isRequired,
    linkText: Types.string.isRequired,
    href: Types.string.isRequired,
  };
  

export default ASICRegulated;