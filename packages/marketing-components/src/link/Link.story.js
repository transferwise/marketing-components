import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import LinkComponent from './Link';

export default {
  component: LinkComponent,
  title: 'Link',
  decorators: [withKnobs],
};

export const Link = () => {
  return (
    <LinkComponent href={text('href', 'https://transferwise.com')}>
      {text('Link text', 'Home')}
    </LinkComponent>
  );
};
