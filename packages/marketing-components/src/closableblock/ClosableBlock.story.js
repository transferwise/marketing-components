import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ClosableBlockComponent from './ClosableBlock';

export default {
  component: ClosableBlock,
  title: 'ClosableBlock',
  decorators: [withKnobs],
};

export const ClosableBlock = () => {
  return (
    <div className="storyCSS">
      <ClosableBlockComponent
        headingLevel="h2"
        heading="Safeguarded at leading banks"
        body="We keep your money in low-risk financial institutions like JP Morgan Chase, Deutsche Bank, and Barclays."
        src="https://transferwise.com/public-resources/assets/public-navigation/phone_number.svg"
      />
      <ClosableBlockComponent
        headingLevel="h2"
        heading="Safeguarded at leading banks"
        body="We keep your money in low-risk financial institutions like JP Morgan Chase, Deutsche Bank, and Barclays."
        src="https://transferwise.com/public-resources/assets/public-navigation/phone_number.svg"
      />
    </div>
  );
};
