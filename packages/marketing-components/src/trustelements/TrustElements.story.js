import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import {
  ASICRegulatedTrustElement,
  BirlesikOdemeRegulatedTrustElement,
  BNMApprovedTrustElement,
  BrazilianCorrespondentTrustElement,
  CAndEDRegulatedTrustElement,
  CanstarAwardTrustElement,
  CustomersTrustElement,
  DIARegulatedTrustElement,
  FCARegulatedTrustElement,
  FINTRACRegulatedTrustElement,
  FSRAApprovedTrustElement,
  InstaMoneyTrustElement,
  JPFSARegulatedTrustElement,
  MASRegulatedTrustElement,
  MitsuiTrustElement,
  SafeTrustElement,
  StraitsTimesTrustElement,
  TrustpilotTrustElement,
  TrustpilotUSTrustElement,
  TUVApprovedTrustElement,
  FPXPayTrustElement,
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

export const ASICRegulated = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <ASICRegulatedTrustElement
          title={text('Title', 'ASIC regulated')}
          linkText={text('LinkText', 'Learn More')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/article/1870573/security/security-and-regulatory-information',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const BirlesikOdemeRegulated = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <BirlesikOdemeRegulatedTrustElement
          title={text('Title', 'Transactions processed by Birlesik Ödeme Hizmetleri')}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const BNMApproved = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <BNMApprovedTrustElement
          title={text('Title', 'Approved in Malaysia')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const BrazilianCorrespondent = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <BrazilianCorrespondentTrustElement
          title={text('Title', 'Acting as exchange correspondents of Brazilian banks')}
          linkText={text('LinkText', 'Learn more')}
          href={text('Link Url', 'https://transferwise.com/br#br-partners')}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const CAndEDRegulated = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <CAndEDRegulatedTrustElement
          title={text('Title', 'C&ED regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const CanstarAward = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <CanstarAwardTrustElement
          title={text('Title', 'Awarded 5 stars for international money transfers')}
          linkText={text('LinkText', 'Read the full report')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/article/1870573/security/security-and-regulatory-information',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const Customers = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <CustomersTrustElement
          title={text('Title', 'Over 8 million customers')}
          linkText={text('LinkText', 'Read on Trustpilot')}
          href={text('Link Url', 'https://www.trustpilot.com/review/transferwise.com')}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const DIARegulated = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <DIARegulatedTrustElement
          title={text('Title', 'DIA regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const FCARegulated = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <FCARegulatedTrustElement
          title={text('Title', 'FCA regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/article/1870573/security/security-and-regulatory-information',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const FINTRACRegulated = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <FINTRACRegulatedTrustElement
          title={text('Title', 'FINTRAC regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const FSRAApproved = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <FSRAApprovedTrustElement
          title={text('Title', "Regulated by ADGM's Financial Services Regulatory Authority")}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/article/1870573/security/security-and-regulatory-information',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const InstaMoney = () => {
  return (
    <div className="row">
      <span>
        <b>
          NOTE: The background colour is needed to highlight the image. Not part of the component.
        </b>
      </span>
      <br />
      <div className="col col-xs-offset-4 col-xs-4" style={{ background: '#b8d6cb' }}>
        <InstaMoneyTrustElement
          title={text('Title', 'Powered by Instamoney')}
          linkText={text('LinkText', 'Learn more')}
          href={text('Link Url', 'https://www.instamoney.co/')}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const JPFSARegulated = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <JPFSARegulatedTrustElement
          title={text('Title', 'Japanese FSA regulated')}
          linkText={text('LinkText', 'Learn more')}
          href={text('Link Url', 'https://transferwise.com/jp/terms-of-use-english')}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const MASRegulated = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <MASRegulatedTrustElement
          title={text('Title', 'Regulated by the Monetary Authority of Singapore (MAS)')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const Mitsui = () => {
  return (
    <div className="row">
      <span>
        <b>
          NOTE: The background colour is needed to highlight the image. Not part of the component.
        </b>
      </span>
      <br />
      <div className="col col-xs-offset-4 col-xs-4" style={{ background: '#b8d6cb' }}>
        <MitsuiTrustElement
          title={text('Title', 'Mitsui & Co invested in us')}
          linkText={text('LinkText', 'Read on TechCrunch')}
          href={text(
            'Link Url',
            'https://jp.techcrunch.com/2017/11/04/20171101transferwise-280-million/',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const Safe = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-5 col-xs-2">
        <SafeTrustElement
          title={text('Title', 'Is TransferWise safe?')}
          linkText={text('LinkText', 'Yes, here’s why')}
          href={text(
            'Link Url',
            'https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const StraitsTimes = () => {
  return (
    <div className="row">
      <span>
        <b>
          NOTE: The background colour is needed to highlight the image. Not part of the component.
        </b>
      </span>
      <br />
      <div className="col col-xs-offset-4 col-xs-4" style={{ background: '#b8d6cb' }}>
        <StraitsTimesTrustElement
          title={text('Title', 'Over 8 million customers')}
          linkText={text('LinkText', 'Read on Straits Times')}
          href={text(
            'Link Url',
            'https://www.sgsme.sg/news/transferwise-aims-be-next-skype-money-transfers',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const TrustpilotRating = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <TrustpilotTrustElement
          title={text('Title', '8 million customers')}
          linkText={text('LinkText', 'Read on Trustpilot')}
          href={text('Link Url', 'https://www.trustpilot.com/review/transferwise.com')}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const TrustpilotUS = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <TrustpilotUSTrustElement
          title={text('Title', 'Millions of happy customers')}
          linkText={text('LinkText', 'See what they have to say')}
          href={text('Link Url', 'https://www.trustpilot.com/review/transferwise.com')}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const TUVApproved = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <TUVApprovedTrustElement
          title={text('Title', 'TÜV approved')}
          linkText={text('LinkText', 'The report')}
          href={text('Link Url', 'https://transferwise.com/gb/blog/transferwise-tuv-audit-2019')}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};

export const FPXPay = () => {
  return (
    <div className="row">
      <span>
        <b>
          NOTE: The background colour is needed to highlight the image. Not part of the component.
        </b>
      </span>
      <br />
      <div className="col col-xs-offset-4 col-xs-4" style={{ background: '#b8d6cb' }}>
        <FPXPayTrustElement
          title={text('Title', 'Pay with FPX, bank transfer, or debit card')}
          linkText={text('LinkText', 'Learn more')}
          href={text(
            'Link Url',
            'https://transferwise.com/my/blog/instant-payments-with-fpx-on-transferwise',
          )}
          useIllustration={boolean('useIllustration', true)}
        />
      </div>
    </div>
  );
};
