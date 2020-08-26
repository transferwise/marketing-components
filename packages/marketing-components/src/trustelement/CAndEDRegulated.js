import React from 'react';

import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';
import Types from 'prop-types';

const CAndEDRegulated = ({ title, subtitle }) => (
  <TrustElement
    src={<SecurityIllustration />}
    alt="Padlock"
    title={title}
    subtitle={subtitle}
    url="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"
  />
);

CAndEDRegulated.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

CAndEDRegulated.defaultProps = {
  title: '',
  subtitle: '',
};

export default CAndEDRegulated;
