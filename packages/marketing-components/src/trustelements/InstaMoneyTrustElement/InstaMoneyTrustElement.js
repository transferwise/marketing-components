import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const InstaMoneyTrustElement = ({ title, linkText, href, useIllustration, ...rest }) => (
  <TrustElement
    {...rest}
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/instamoney.png"
    title={title}
    linkText={linkText}
    href={href}
    useIllustration={useIllustration}
  />
);

InstaMoneyTrustElement.propTypes = {
  title: Types.oneOfType([Types.element, Types.string]).isRequired,
  linkText: Types.oneOfType([Types.element, Types.string]).isRequired,
  href: Types.string.isRequired,
  useIllustration: Types.bool,
};

InstaMoneyTrustElement.defaultProps = {
  useIllustration: true,
};

export default InstaMoneyTrustElement;
