import React from 'react';

import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';
import Types from 'prop-types';

const ASICRegulated = ({ title, subtitle }) => (
  <TrustElement
    src={<SecurityIllustration />}
    alt="Padlock"
    title={title}
    subtitle={subtitle}
    url="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"
  />
);

ASICRegulated.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

ASICRegulated.defaultProps = {
  title: '',
  subtitle: '',
};

export default ASICRegulated;
