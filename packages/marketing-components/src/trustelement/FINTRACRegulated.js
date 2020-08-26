import React from 'react';
import Types from 'prop-types';

import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';

const FINTRACRegulated = ({ title, subtitle }) => (
  <TrustElement
    src={<SecurityIllustration />}
    alt="Padlock"
    title={title}
    subtitle={subtitle}
    url="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"
  />
);

FINTRACRegulated.propTypes = {
  title: Types.string.isRequired,
  subtitle: Types.string.isRequired,
};

FINTRACRegulated.defaults = {
  title: Types.string.isRequired,
  subtitle: Types.string.isRequired,
};
export default FINTRACRegulated;
