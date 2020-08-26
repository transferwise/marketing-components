import React from 'react';

import TrustElement from './TrustElement';
import TrustpilotIllustration from './TrustpilotIllustration';
import Types from 'prop-types';

const Trustpilot = ({ title, subtitle }) => (
  <TrustElement
    src={<TrustpilotIllustration />}
    alt="Trustpilot"
    title={title}
    subtitle={subtitle}
    url="https://www.trustpilot.com/review/transferwise.com"
  />
);

Trustpilot.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

Trustpilot.defaultProps = {
  title: '',
  subtitle: '',
};

export default Trustpilot;
