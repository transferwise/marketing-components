import React from 'react';
import { FCARegulated as FCA } from './';
import { withKnobs, text } from '@storybook/addon-knobs';

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
