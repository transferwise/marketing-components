import React from 'react';

import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';
import Types from 'prop-types';

const BirlesikOdemeRegulated = ({ title }) => (
  <TrustElement src={<SecurityIllustration />} alt="Padlock" title={title} />
);

BirlesikOdemeRegulated.propTypes = {
  title: Types.string,
};

BirlesikOdemeRegulated.defaultProps = {
  title: '',
};
export default BirlesikOdemeRegulated;
