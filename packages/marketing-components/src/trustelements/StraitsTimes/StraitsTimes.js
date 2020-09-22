import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const StraitsTimes = ({ title, linkText, href }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/straits_times.svg"
    title={title}
    linkText={linkText}
    href={href}
  />
);
StraitsTimes.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
};

export default StraitsTimes;