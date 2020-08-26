import React from 'react';

import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';
import Types from 'prop-types';

const DIARegulated = ({ title, subtitle }) => (
  <TrustElement
    src={<SecurityIllustration />}
    alt="Padlock"
    title="trustElement.dia.title"
    subtitle="trustElement.security.subtitle"
    url="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"
  />
);

DIARegulated.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

DIARegulated.defaultProps = {
  title: '',
  subtitle: '',
};

export default DIARegulated;
