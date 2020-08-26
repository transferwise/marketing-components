import React from 'react';
import Types from 'prop-types';

import TrustElement from './TrustElement';
import FCAIllustration from './FCAIllustration';

const FCARegulated = ({ title, subtitle }) => (
  <TrustElement
    src={<FCAIllustration />}
    alt="Padlock"
    title={title}
    subtitle={subtitle}
    url="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"
  />
);
FCARegulated.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

FCARegulated.defaultProps = {
  title: '',
  subtitle: '',
};

export default FCARegulated;
