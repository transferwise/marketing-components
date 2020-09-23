import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { FCARegulated as FCA, Trustpilot } from './';

export default {
  title: 'TrustElements',
  decorators: [withKnobs],
};

export const FCARegulated = () => {
  return (
    <div className="row">
      <div className="col col-xs-offset-4 col-xs-4">
        <FCA
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