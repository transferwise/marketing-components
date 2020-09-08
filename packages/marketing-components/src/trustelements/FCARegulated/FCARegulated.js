import React from 'react';
import Types from 'prop-types';

import TrustElement from '../TrustElement';
import FCAIllustration from './FCAIllustration.svg';

const FCARegulated = ({ title, linkText, href }) => (
  <TrustElement src={FCAIllustration} title={title} linkText={linkText} href={href} />
);
FCARegulated.propTypes = {
  title: Types.string.isRequired,
  linkText: Types.string.isRequired,
  href: Types.string.isRequired,
};

export default FCARegulated;
