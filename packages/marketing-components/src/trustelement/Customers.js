import React from 'react';

import TrustElement from './TrustElement';
import customersIllustration from './customers.svg';
import Types from 'prop-types';

const Customers = ({ title, subtitle }) => (
  <TrustElement
    src={customersIllustration}
    alt="Customers"
    title={title}
    subtitle={subtitle}
    url="https://de.trustpilot.com/review/transferwise.com"
  />
);

Customers.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

Customers.defaultProps = {
  title: '',
  subtitle: '',
};

export default Customers;
