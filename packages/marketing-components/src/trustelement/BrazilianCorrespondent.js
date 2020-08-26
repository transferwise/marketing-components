import React from 'react';

import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';
import Types from 'prop-types';

const BrazilianCorrespondent = ({ title, subtitle }) => (
  <TrustElement
    src={<SecurityIllustration />}
    alt="Padlock"
    title={title}
    subtitle={subtitle}
    url="#br-partners"
  />
);

BrazilianCorrespondent.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

BrazilianCorrespondent.defaultProps = {
  title: '',
  subtitle: '',
};

export default BrazilianCorrespondent;
