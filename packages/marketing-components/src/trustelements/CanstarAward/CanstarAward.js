import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';

const CanstarAward = ({ title, linkText, href }) => (
  <TrustElement
    src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/canstar.png"
    title={title}
    linkText={linkText}
    href={href}
  />
);
CanstarAward.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
};

export default CanstarAward;
