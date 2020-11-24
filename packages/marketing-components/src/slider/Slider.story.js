import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import SliderComponent from './Slider';

export default {
  component: Slider,
  title: 'Slider',
  decorators: [withKnobs],
};

export const Slider = () => {
  return (
    <SliderComponent
      title={text('This is Slider component')}
    />
  );
};
