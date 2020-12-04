import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import SecurityIllustration from '../SecurityIllustration';

const BrazilianCorrespondentTrustElement = ({
  title,
  linkText,
  href,
  useIllustration,
  ...rest
}) => (
  <TrustElement
    {...rest}
    src={<SecurityIllustration />}
    title={title}
    linkText={linkText}
    href={href}
    shouldAnimate
    useIllustration={useIllustration}
  />
);

BrazilianCorrespondentTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

BrazilianCorrespondentTrustElement.defaultProps = {
  useIllustration: true,
};

export default BrazilianCorrespondentTrustElement;
