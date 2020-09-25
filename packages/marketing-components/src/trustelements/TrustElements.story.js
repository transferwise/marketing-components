import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import {
  ASICRegulated,
  BirlesikOdemeRegulated,
  BNMApproved,
  BrazilianCorrespondent,
  CAndEDRegulated,
  CanstarAward,
  Customers,
  DIARegulated,
  FCARegulated,
  FINTRACRegulated,
  FSRAApproved,
  JPFSARegulated,
  MASRegulated,
  Mitsui,
  Safe,
  StraitsTimes,
  Trustpilot,
  TrustpilotUS,
  TUVApproved,
  FPXPay,
} from './';

export default {
  title: 'TrustElements',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
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

export const BirlesikOdemeRegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <BirlesikOdemeRegulated
          title={text('Title', 'Transactions processed by Birlesik Ödeme Hizmetleri')}
        />
      </div>
    </div>
  );
};

export const BNMApprovedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <BNMApproved
          title={text('Title', 'Approved in Malaysia')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
        />
      </div>
    </div>
  );
};

export const BrazilianCorrespondentElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <BrazilianCorrespondent
          title={text('Title', 'Acting as exchange correspondents of Brazilian banks')}
          linkText={text('LinkText', 'Learn more')}
          href={text('Link Url', 'https://transferwise.com/br#br-partners')}
        />
      </div>
    </div>
  );
};

export const CAndEDRegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <CAndEDRegulated
          title={text('Title', 'C&ED regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
        />
      </div>
    </div>
  );
};

export const CanstarAwardElement = () => {
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

export const CustomersElement = () => {
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

export const DIARegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <DIARegulated
          title={text('Title', 'DIA regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
        />
      </div>
    </div>
  );
};

export const FCARegulatedElement = () => {
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


export const FINTRACRegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <FINTRACRegulated
          title={text('Title', 'FINTRAC regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
        />
      </div>
    </div>
  );
};

export const FSRAApprovedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <FSRAApproved
          title={text('Title', "Regulated by ADGM's Financial Services Regulatory Authority")}
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

export const JPFSARegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <JPFSARegulated
          title={text('Title', 'Japanese FSA regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text('Link Url', 'https://transferwise.com/jp/terms-of-use-english')}
        />
      </div>
    </div>
  );
};

export const MASRegulatedElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <MASRegulated
          title={text('Title', 'Regulated by the Monetary Authority of Singapore (MAS)')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
        />
      </div>
    </div>
  );
};

export const MitsuiElement = () => {
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

export const SafeElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <Safe
          title={text('Title', 'Is TransferWise safe?')}
          linkText={text('LinkText', 'Yes, here’s why')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
        />
      </div>
    </div>
  );
};

export const StraitsTimesElement = () => {
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

export const TrustpilotRating = () => {
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

export const TrustpilotUSElement = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <TrustpilotUS
          title={text('Title', 'Millions of happy customers')}
          linkText={text('LinkText', 'See what they have to say')}
          href={text('Link Url', 'https://www.trustpilot.com/review/transferwise.com')}
        />
      </div>
    </div>
  );
};

export const TUVApprovedElement = () => {
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

export const FPXPayElement = () => {
  return (
    <div className="row">
      <span>
        {' '}
        <b>
          NOTE: The background color is needed to highlight the image. Not part of the component
        </b>
      </span>
      <br />
      <div className="col col-xs-offset-4 col-xs-4" style={{ background: '#b8d6cb' }}>
        <FPXPay
          title={text('Title', 'Pay with FPX, bank transfer, or debit card')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/my/blog/instant-payments-with-fpx-on-transferwise',
          )}
        />
      </div>
    </div>
  );
};
