import React from 'react';

import TrustElement from './TrustElement';
import FCAIllustration from './FCAIllustration';
import Types from 'prop-types';

const FSRAApproved = ({ title, subtitle }) => (
  <TrustElement
    src={<FCAIllustration />}
    alt="Padlock"
    title={title}
    subtitle={subtitle}
    url="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"
  />
);

FSRAApproved.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

FSRAApproved.defaultProps = {
  title: '',
  subtitle: '',
};
export default FSRAApproved;
