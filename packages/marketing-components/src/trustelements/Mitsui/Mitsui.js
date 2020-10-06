import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const Mitsui = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/mitsui.svg"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

Mitsui.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

Mitsui.defaultProps = {
  useIllustration: true,
};

export default Mitsui;
