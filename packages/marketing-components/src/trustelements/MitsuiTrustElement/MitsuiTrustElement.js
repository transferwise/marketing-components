import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const MitsuiTrustElement = ({ title, linkText, href, useIllustration }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/mitsui.svg"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

MitsuiTrustElement.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

MitsuiTrustElement.defaultProps = {
  useIllustration: true,
};

export default MitsuiTrustElement;
