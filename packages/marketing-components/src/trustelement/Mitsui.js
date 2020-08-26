import React from 'react';

import mitsuiIllustration from './mitsui.svg';
import TrustElement from './TrustElement';
import Types from 'prop-types';

const Mitsui = ({ title, subtitle }) => (
  <TrustElement
    src={mitsuiIllustration}
    alt="Mitsui logo"
    title="trustElement.mitsui.title"
    subtitle="trustElement.mitsui.subtitle"
    url="https://jp.techcrunch.com/2017/11/04/20171101transferwise-280-million/"
  />
);

Mitsui.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

Mitsui.defaultProps = {
  title: '',
  subtitle: '',
};

export default Mitsui;
