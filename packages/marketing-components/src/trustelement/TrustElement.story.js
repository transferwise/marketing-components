import React from 'react';
import TrustElement from './TrustElement';
import ASICRegulated from './ASICRegulated';
import BirlesikOdemeRegulated from './BirlesikOdemeRegulated';
import BNMApproved from './BNMApproved';
import CAndEDRegulated from './CAndEDRegulated';
import Canstar from './Canstar';
import Customers from './Customers';

export default {
  component: TrustElement,
  title: 'TrustElement',
};

export const ASICRegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <ASICRegulated title="ASIC regulated" subtitle="Learn more" />
      </div>
    </div>
  );
};

export const BirlesikOdemeRegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <BirlesikOdemeRegulated title="Transactions processed by Birlesik Ödeme Hizmetleri" />
      </div>
    </div>
  );
};

export const BNMApprovedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <BNMApproved title="Approved by Bank Negara Malaysia" subtitle="Learn more" />
      </div>
    </div>
  );
};

export const BrazilianCorrespondent = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <BNMApproved
          title="Acting as exchange correspondents of Brazilian banks"
          subtitle="Learn more"
        />
      </div>
    </div>
  );
};

export const CAndEDRegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <CAndEDRegulated title="C&ED regulated" subtitle="Learn more" />
      </div>
    </div>
  );
};

export const CanstarElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <Canstar
          title="Awarded 5 stars for international money transfers"
          subtitle="Read the full report"
        />
      </div>
    </div>
  );
};

export const CustomersElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <Customers title="Over 8 million customers" subtitle="Hear from them" />
      </div>
    </div>
  );
};
