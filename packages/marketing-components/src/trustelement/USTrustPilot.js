import React from 'react';

import TrustElement from './TrustElement';
import TrustpilotIllustration from './TrustpilotIllustration';
import Types from 'prop-types';

const USTrustPilot = ({ title, subtitle }) => (
  <TrustElement
    src={<TrustpilotIllustration />}
    alt="Trustpilot"
    title={title}
    subtitle={subtitle}
    url="https://www.trustpilot.com/review/transferwise.com"
  />
);

USTrustPilot.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

USTrustPilot.defaultProps = {
  title: '',
  subtitle: '',
};

export default USTrustPilot;
