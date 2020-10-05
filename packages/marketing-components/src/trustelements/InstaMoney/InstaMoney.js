import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const InstaMoney = ({ title, linkText, href }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/instamoney.png"
    title={title}
    linkText={linkText}
    href={href}
  />
);

InstaMoney.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
};

export default InstaMoney;
