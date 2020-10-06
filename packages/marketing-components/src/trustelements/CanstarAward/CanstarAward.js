import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const CanstarAward = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/canstar.png"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

CanstarAward.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

CanstarAward.defaultProps = {
  useIllustration: true,
};

export default CanstarAward;
