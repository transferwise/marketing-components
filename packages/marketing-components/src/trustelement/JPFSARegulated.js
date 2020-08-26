import React from 'react';
import Types from 'prop-types';

// import { WithTranslations } from 'retranslate';
import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';

const JPFSARegulated = ({ title, subtitle }) => (
  <TrustElement
    src={<SecurityIllustration />}
    alt="Padlock"
    title={title}
    subtitle={subtitle}
    url="trustElement.jpFsa.url"
  />
);

JPFSARegulated.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

JPFSARegulated.defaultProps = {
  title: '',
  subtitle: '',
};

export default JPFSARegulated;
