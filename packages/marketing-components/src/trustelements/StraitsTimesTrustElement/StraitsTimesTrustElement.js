import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const StraitsTimesTrustElement = ({ title, linkText, href, useIllustration, ...rest }) => (
  <TrustElement
    {...rest}
    src="https://wise.com/public-resources/assets/marketing-components/illustrations/straits_times.svg"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

StraitsTimesTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

StraitsTimesTrustElement.defaultProps = {
  useIllustration: true,
};

export default StraitsTimesTrustElement;
