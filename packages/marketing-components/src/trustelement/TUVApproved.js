import React from 'react';
import Types from 'prop-types';

import TrustElement from './TrustElement';
import tuvIllustration from './tuv.png';

const TUVApproved = ({ alt, title, subtitle, url }) => {
  return (
    <TrustElement src={tuvIllustration} alt={alt} title={title} subtitle={subtitle} url={url} />
  );
};

TUVApproved.propTypes = {
  alt: Types.string,
  title: Types.string,
  subtitle: Types.string,
  url: Types.string,
};

TUVApproved.defaultProps = {
  alt: '',
  title: '',
  subtitle: '',
  url: '',
};

export default TUVApproved;
