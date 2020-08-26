import React from 'react';

import TrustElement from './TrustElement';
import canstarLogo from './canstar.png';
import Types from 'prop-types';

const Canstar = ({ title, subtitle }) => (
  <TrustElement
    src={canstarLogo}
    alt="Canstar logo"
    title={title}
    subtitle={subtitle}
    url="https://www.canstar.com.au/star-rating-reports/international-money-transfers/"
  />
);

Canstar.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

Canstar.defaultProps = {
  title: '',
  subtitle: '',
};
export default Canstar;
