import React from 'react';

import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';
import Types from 'prop-types';

const Safe = ({ title, subtitle }) => (
  <TrustElement
    src={<SecurityIllustration />}
    alt="Safe"
    title={title}
    subtitle={subtitle}
    url="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"
  />
);

Safe.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

Safe.defaultProps = {
  title: '',
  subtitle: '',
};

export default Safe;
