import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const Mitsui = ({ title, linkText, href }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/mitsui.svg"
    title={title}
    linkText={linkText}
    href={href}
  />
);
Mitsui.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
};

export default Mitsui;
