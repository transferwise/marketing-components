import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import AppStoreBadgeComponent from './AppStoreBadge';

export default {
  component: AppStoreBadge,
  title: 'AppStoreBadge',
  decorators: [withKnobs],
};

export const AppStoreBadge = () => {
  return (
    <AppStoreBadgeComponent
      language={text('Language', 'en')}
      centered={boolean('Centered', false)}
      alt={text('Alt', 'Download from the Apple App Store')}
      locale={text('Locale', 'gb')}
    />
  );
};
