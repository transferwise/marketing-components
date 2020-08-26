import React from 'react';
import Types from 'prop-types';

import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';

const MASRegulated = ({ title, subtitle }) => (
  <TrustElement
    src={<SecurityIllustration />}
    alt="Padlock"
    title={title}
    subtitle={subtitle}
    url="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"
  />
);

MASRegulated.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

MASRegulated.defaultProps = {
  title: '',
  subtitle: '',
};

export default MASRegulated;
