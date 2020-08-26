import React from 'react';
import TrustElement from './TrustElement';
import SecurityIllustration from './SecurityIllustration';
import Types from 'prop-types';

const BNMApproved = ({ title, subtitle }) => (
  <TrustElement
    src={<SecurityIllustration />}
    alt="Padlock"
    title={title}
    subtitle={subtitle}
    url="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"
  />
);

BNMApproved.propTypes = {
  title: Types.string,
  subtitle: Types.string,
};

BNMApproved.defaultProps = {
  title: '',
  subtitle: '',
};

export default BNMApproved;
