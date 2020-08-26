import React from 'react';

import TrustElement from './TrustElement';
import straitsTimesIllustration from './straitsTimes.svg';
import Types from 'prop-types';

const StraitsTimes = ({ title, subtitle }) => (
  <TrustElement
    src={straitsTimesIllustration}
    alt="Straits Times logo"
    title={title}
    subtitle={subtitle}
    url="https://www.sgsme.sg/news/transferwise-aims-be-next-skype-money-transfers"
  />
);

StraitsTimes.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

StraitsTimes.defaultProps = {
  title: '',
  subtitle: '',
};

export default StraitsTimes;
