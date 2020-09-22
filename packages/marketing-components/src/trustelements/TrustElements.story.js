import React from 'react';
import {
  ASICRegulated,
  CanstarAward,
  Customers,
  FCARegulated,
  Mitsui,
  StraitsTimes,
  Trustpilot,
  TUVApproved,
} from './';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'TrustElements',
  decorators: [withKnobs],
};

export const ASICRegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <ASICRegulated
          title={text('Title', 'ASIC regulated')}
          linkText={text('LinkText', 'Learn More')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/article/1870573/security/security-and-regulatory-information',
          )}
        />
      </div>
    </div>
  );
};

export const CanstarAwardTE = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <CanstarAward
          title={text('Title', 'Awarded 5 stars for international money transfers')}
          linkText={text('LinkText', 'Read the full report')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/article/1870573/security/security-and-regulatory-information',
          )}
        />
      </div>
    </div>
  );
};

export const CustomersTE = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <Customers
          title={text('Title', 'Over 8 million customers')}
          linkText={text('LinkText', 'Read on Trustpilot')}
          href={text('Link Url', 'https://www.trustpilot.com/review/transferwise.com')}
        />
      </div>
    </div>
  );
};

export const FCARegulatedTE = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <FCARegulated
          title={text('Title', 'FCA regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/article/1870573/security/security-and-regulatory-information',
          )}
        />
      </div>
    </div>
  );
};

export const MitsuiTE = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <Mitsui
          title={text('Title', 'Mitsui & Co invested in us')}
          linkText={text('LinkText', 'Read on TechCrunch')}
          href={text(
            'Link Url',
            'https://jp.techcrunch.com/2017/11/04/20171101transferwise-280-million/',
          )}
        />
      </div>
    </div>
  );
};

export const StraitsTimesTE = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <StraitsTimes
          title={text('Title', 'Over 8 million customers')}
          linkText={text('LinkText', 'Read on Straits Times')}
          href={text(
            'Link Url',
            'https://www.sgsme.sg/news/transferwise-aims-be-next-skype-money-transfers',
          )}
        />
      </div>
    </div>
  );
};

export const TrustpilotTE = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <Trustpilot
          title={text('Title', '8 million customers')}
          linkText={text('LinkText', 'Read on Trustpilot')}
          href={text('Link Url', 'https://www.trustpilot.com/review/transferwise.com')}
        />
      </div>
    </div>
  );
};

export const TUVApprovedTE = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <TUVApproved
          title={text('Title', 'TÜV approved')}
          linkText={text('LinkText', 'The report')}
          href={text('Link Url', 'https://transferwise.com/gb/blog/transferwise-tuv-audit-2019')}
        />
      </div>
    </div>
  );
};
