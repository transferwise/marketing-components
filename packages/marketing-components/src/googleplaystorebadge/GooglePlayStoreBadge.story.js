import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import GooglePlayStoreBadgeComponent from './GooglePlayStoreBadge';

export default {
  component: GooglePlayStoreBadge,
  title: 'GooglePlayStoreBadge',
  decorators: [withKnobs],
};

export const GooglePlayStoreBadge = () => {
  return (
    <GooglePlayStoreBadgeComponent
      language={text('Language', 'en')}
      alt={text('Alt', 'Download from the Google Play Store')}
    />
  );
};
